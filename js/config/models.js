import { AsyncStorage } from "react-native";

export const setFave = async faveId => {
  try {
    await AsyncStorage.setItem(
      `${faveId}`,
      JSON.stringify({
        id: faveId,
        favedOn: new Date()
      })
    );
  } catch (e) {
    console.log(e);
  }
};

export const getFaves = async () => {
  try {
    const faveKeys = await AsyncStorage.getAllKeys();
    return await AsyncStorage.multiGet(faveKeys);
  } catch (e) {
    console.log(e);
  }
};

export const deleteFave = async faveId => {
  try {
    await AsyncStorage.removeItem(`${faveId}`);
  } catch (e) {
    console.log(e);
  }
};
