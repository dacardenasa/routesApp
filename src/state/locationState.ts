import { LocationObject } from 'expo-location'
import { create } from 'zustand'

interface IUserLocationPayload {
  location?: LocationObject
  isEnabledLocation: boolean
}

interface UserLocationState {
  isEnabledLocation: boolean | undefined
  location: LocationObject
  registerLocationData: (payload: IUserLocationPayload) => void
}

const userLocationStore = create<UserLocationState>()((set) => ({
  isEnabledLocation: undefined,
  location: {
    coords: {
      accuracy: null,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      latitude: 0,
      longitude: 0,
      speed: null,
    },
    timestamp: 0,
  },
  registerLocationData: (payload) => set((state) => ({ ...state, ...payload })),
}))

export default userLocationStore;

