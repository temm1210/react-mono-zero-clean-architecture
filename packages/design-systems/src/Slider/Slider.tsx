import "./Slider.scss";

export interface SliderProps {
  /** 도달할 수 있는 최소값 */
  min?: number;
  /** 도달할 수 있는 최대값 */
  max?: number;
  /** 초기값 */
  defaultValue?: number;
}

function Slider({ min = 0, max = 100, defaultValue = 0 }: SliderProps) {
  return (
    <div className="slider">
      <div className="slider__rail" />
      <div className="slider__track" />
      <div
        className="slider__controller"
        role="slider"
        aria-label="가로방향 슬라이더"
        aria-valuenow={defaultValue}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-orientation="horizontal"
        tabIndex={0}
      />
    </div>
  );
}

export default Slider;