import AsyncStorage from '@react-native-async-storage/async-storage';
// import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

// jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    // error reading value
  }
};
