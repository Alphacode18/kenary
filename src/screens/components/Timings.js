import React, { useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Layout, Text, Button, Divider, Popover } from '@ui-kitten/components';
const { height, width } = Dimensions.get('screen');

export default Timings = ({ timings }) => {
  const [mondayVisible, setMondayVisible] = useState(false);
  const [tuesdayVisible, setTuesdayVisible] = useState(false);
  const [wednesdayVisible, setWednesdayVisible] = useState(false);
  const [thursdayVisible, setThursdayVisible] = useState(false);
  const [fridayVisible, setFridayVisible] = useState(false);
  const [saturdayVisible, setSaturdayVisible] = useState(false);
  const [sundayVisible, setSundayVisible] = useState(false);
  const renderTimingButton = (day) => (
    <Button
      style={{
        width: 55,
        height: 55,
        borderRadius: width / 2,
        borderColor: 'teal',
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: 'teal',
      }}
      onPress={() => {
        switch (day) {
          case 'M':
            setMondayVisible(true);
            break;
          case 'T':
            setTuesdayVisible(true);
            break;
          case 'W':
            setWednesdayVisible(true);
            break;
          case 'R':
            setThursdayVisible(true);
            break;
          case 'F':
            setFridayVisible(true);
            break;
          case 'S':
            setSaturdayVisible(true);
            break;
          case 'Su':
            setSundayVisible(true);
            break;
        }
      }}
    >
      {day === 'Su' ? 'S' : day}
    </Button>
  );
  return (
    <Layout>
      <Text style={{ fontSize: 25, fontWeight: '500', padding: 15 }}>
        Timings
      </Text>
      <Layout
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignContent: 'space-between',
          marginBottom: 10,
        }}
      >
        <Popover
          visible={mondayVisible}
          anchor={() => renderTimingButton('M')}
          onBackdropPress={() => setMondayVisible(false)}
          placement={'top'}
        >
          <Layout style={styles.content}>
            <Text>{timings['monday']}</Text>
          </Layout>
        </Popover>
        <Popover
          visible={tuesdayVisible}
          anchor={() => renderTimingButton('T')}
          onBackdropPress={() => setTuesdayVisible(false)}
          placement={'top'}
        >
          <Layout style={styles.content}>
            <Text>{timings['tuesday']}</Text>
          </Layout>
        </Popover>
        <Popover
          visible={wednesdayVisible}
          anchor={() => renderTimingButton('W')}
          onBackdropPress={() => setWednesdayVisible(false)}
          placement={'top'}
        >
          <Layout style={styles.content}>
            <Text>{timings['wednesday']}</Text>
          </Layout>
        </Popover>
        <Popover
          visible={thursdayVisible}
          anchor={() => renderTimingButton('R')}
          onBackdropPress={() => setThursdayVisible(false)}
          placement={'top'}
        >
          <Layout style={styles.content}>
            <Text>{timings['thursday']}</Text>
          </Layout>
        </Popover>
        <Popover
          visible={fridayVisible}
          anchor={() => renderTimingButton('F')}
          onBackdropPress={() => setFridayVisible(false)}
          placement={'top'}
        >
          <Layout style={styles.content}>
            <Text>{timings['friday']}</Text>
          </Layout>
        </Popover>
        <Popover
          visible={saturdayVisible}
          anchor={() => renderTimingButton('S')}
          onBackdropPress={() => setSaturdayVisible(false)}
          placement={'top'}
        >
          <Layout style={styles.content}>
            <Text>{timings['saturday']}</Text>
          </Layout>
        </Popover>
        <Popover
          visible={sundayVisible}
          anchor={() => renderTimingButton('Su')}
          onBackdropPress={() => setSundayVisible(false)}
          placement={'top'}
        >
          <Layout style={styles.content}>
            <Text>{timings['sunday']}</Text>
          </Layout>
        </Popover>
      </Layout>
      <Divider
        style={{ width: 0.9 * width, marginLeft: 15, marginBottom: 15 }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
});
