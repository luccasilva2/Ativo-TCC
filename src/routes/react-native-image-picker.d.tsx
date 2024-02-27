declare module 'react-native-image-picker' {
    export interface ImagePickerResponse {
      fileSize: any;
      type: any;
      fileName: string;
      didCancel: boolean;
      error: string | undefined;
      uri: string | undefined;
    }
  
    export interface Options {
      title?: string;
      cancelButtonTitle?: string;
      takePhotoButtonTitle?: string;
      chooseFromLibraryButtonTitle?: string;
      customButtons?: Array<{ name: string; title: string }>;
      cameraType?: 'front' | 'back';
      mediaType?: 'photo' | 'video' | 'mixed';
      maxWidth?: number;
      maxHeight?: number;
      quality?: number;
      videoQuality?: 'low' | 'medium' | 'high';
      durationLimit?: number;
      rotation?: number;
      allowsEditing?: boolean;
      noData?: boolean;
      storageOptions?: {
        skipBackup?: boolean;
        path?: string;
        cameraRoll?: boolean;
        waitUntilSaved?: boolean;
      };
    }
  
    export function launchImageLibrary(
      options: Options,
      callback: (response: ImagePickerResponse) => void
    ): void;
  
    export function launchCamera(
      options: Options,
      callback: (response: ImagePickerResponse) => void
    ): void;
  }
  