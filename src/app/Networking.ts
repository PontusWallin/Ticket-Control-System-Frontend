import {environment} from "../environments/environment";

export class Networking {
  public static readonly BASE_URL = environment.BASE_URL;
  public static readonly DISPLAY_ENDPOINT = '/display';
  public static readonly VALIDATE_ENDPOINT = '/validate';
  public static readonly LOAD_ENDPOINT = '/load';
  public static readonly FULL_DISPLAY_ENDPOINT = Networking.BASE_URL + Networking.DISPLAY_ENDPOINT;
  public static readonly FULL_VALIDATE_ENDPOINT = Networking.BASE_URL + Networking.VALIDATE_ENDPOINT;
  public static readonly FULL_LOAD_ENDPOINT = Networking.BASE_URL + Networking.LOAD_ENDPOINT;
}
