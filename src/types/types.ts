export interface IList {
  id: number;
  components: number[];
}

export type TComponentType = 'button' | 'condition' | 'image' | 'weather';

export interface IComponent {
  id: number;
  type: TComponentType;
}

export interface IVariable {
  name: string;
  type: string;
  initialValue: string;
}

export interface IWeatherCoords {
  lat: number;
  lon: number;
}

export interface IButtonComponent extends IComponent {
  options: {
    text: string;
    variable: string;
    value: string;
  };
  type: 'button';
}

export interface IConditionComponent extends IComponent {
  children: number;
  options: {
    variable: string;
    value: string;
  };
  type: 'condition';
}

export interface IImageComponent extends IComponent {
  options: {
    alt: string;
    scr: string;
  };
  type: 'image';
}

export interface IWeatherComponent extends IComponent {
  options: IWeatherCoords;
  type: 'weather';
}

export type TComponent = IButtonComponent | IConditionComponent | IImageComponent | IWeatherComponent;

export interface IUpcomingWeather {
  day: string,
  condition: string;
  conditionName: string;
}

export interface IWeatherData {
  lon: string;
  lat: string;
  condition: string,
  conditionName: string;
  temperature: number,
  unit: string;
  location: string;
  upcomming: IUpcomingWeather[];
}