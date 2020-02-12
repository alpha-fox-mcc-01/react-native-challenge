import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const MovieDetails = ({ route }) => {
  const {
    Value,
    event,
    block,
    cond,
    eq,
    set,
    Clock,
    startClock,
    stopClock,
    debug,
    timing,
    clockRunning,
    interpolate,
    Extrapolate,
    concat,
  } = Animated;

  function runTiming(clock, value, dest) {
    const state = {
      finished: new Value(0),
      position: new Value(0),
      time: new Value(0),
      frameTime: new Value(0),
    };

    const config = {
      duration: 1000,
      toValue: new Value(0),
      easing: Easing.inOut(Easing.ease),
    };

    return block([
      cond(clockRunning(clock), 0, [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, dest),
        startClock(clock),
      ]),
      timing(clock, state, config),
      cond(state.finished, debug('stop clock', stopClock(clock))),
      state.position,
    ]);
  }

  const buttonOpacity = new Value(1);
  const onStateChange = event([
    {
      nativeEvent: ({ state }) =>
        block([
          cond(
            eq(state, State.END),
            set(buttonOpacity, runTiming(new Clock(), 1, 0))
          ),
        ]),
    },
  ]);

  const onCloseState = event([
    {
      nativeEvent: ({ state }) =>
        block([
          cond(
            eq(state, State.END),
            set(buttonOpacity, runTiming(new Clock(), 0, 1))
          ),
        ]),
    },
  ]);

  const detailZIndex = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1, -1],
    extrapolate: Extrapolate.CLAMP,
  });

  const detailOpacity = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const crossRotate = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [180, 360],
    extrapolate: Extrapolate.CLAMP,
  });

  const bottomImage = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [80, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const radiusStyle = {
    borderBottomLeftRadius: bottomImage,
    borderBottomRightRadius: bottomImage,
  };

  const { title, rating, poster, year, plot } = route.params;
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFill,
          transform: [
            {
              translateY: interpolate(buttonOpacity, {
                inputRange: [0, 1],
                outputRange: [-height / 3, 0],
                extrapolate: Extrapolate.CLAMP,
              }),
            },
          ],
        }}
      >
        <Animated.Image
          source={{ uri: poster }}
          style={{
            ...radiusStyle,
            flex: 1,
            // width: null,
            // height: null,
          }}
        />
      </Animated.View>
      <View style={{ height: height / 3, justifyContent: 'center' }}>
        <TapGestureHandler onHandlerStateChange={onStateChange}>
          <Animated.View
            style={{
              ...styles.button,
              opacity: buttonOpacity,
              transform: [
                {
                  translateY: interpolate(buttonOpacity, {
                    inputRange: [0, 1],
                    outputRange: [100, 0],
                    extrapolate: Extrapolate.CLAMP,
                  }),
                },
              ],
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Details</Text>
          </Animated.View>
        </TapGestureHandler>
        <Animated.View
          style={{
            zIndex: detailZIndex,
            opacity: detailOpacity,
            height: height / 3,
            ...StyleSheet.absoluteFill,
            top: null,
            // justifyContent: 'center',
            // alignItems: 'center',
            padding: 30,
            transform: [
              {
                translateY: interpolate(buttonOpacity, {
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                  extrapolate: Extrapolate.CLAMP,
                }),
              },
            ],
          }}
        >
          <TapGestureHandler onHandlerStateChange={onCloseState}>
            <Animated.View style={styles.closeButton}>
              <Animated.Text
                style={{
                  fontSize: 15,
                  transform: [
                    {
                      rotate: concat(crossRotate, 'deg'),
                    },
                  ],
                }}
              >
                X
              </Animated.Text>
            </Animated.View>
          </TapGestureHandler>
          <Text
            style={{
              ...styles.textBase,
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            {title}
          </Text>
          <Text style={styles.textBase}>Release year: {year}</Text>
          <Text style={styles.textBase}>Rating: {rating}</Text>
          <Text
            style={{
              ...styles.textBase,
              fontSize: 15,
              fontWeight: 'bold',
              marginTop: 10,
            }}
          >
            Plot
          </Text>
          <Text style={styles.textBase}>{plot}</Text>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    flex: 1,
  },
  textBase: {
    color: 'black',
    fontFamily: 'serif',
  },
  button: {
    backgroundColor: 'white',
    height: 50,
    marginHorizontal: 130,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -20,
    left: width / 2 - 20,
    elevation: 1,
  },
};

export default MovieDetails;
