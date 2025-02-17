import { useState, useEffect } from "react";

export type UseStatusUpdateHandler = () => void;

export interface UseStatusUpdateHandlers {
  stickToScreenMode: UseStatusUpdateHandler;
  stickToContainerBottom: UseStatusUpdateHandler;
  unStick: UseStatusUpdateHandler;
}
export interface UseStatusState {
  isSticky: boolean;
  isAbsolute: boolean;
}

export type UseStatusUpdateHandlersReturn = UseStatusUpdateHandlers | null;
export type UseStatusUpdateReturn = [UseStatusUpdateHandlersReturn, UseStatusState];

/**
 * sticky component의 상태값을 업데이트
 * sticky component의 상태값 추가, 변경 이외에는 수정되면 안됨
 * 오로지 sticky 상태값관련 역할만 담당
 */
const useStatusUpdaters = (initIsSticky: boolean): UseStatusUpdateReturn => {
  const [isSticky, setIsSticky] = useState(false);
  const [isAbsolute, setIsIsAbsolute] = useState(false);

  const [handler, setHandler] = useState<UseStatusUpdateHandlersReturn>(null);

  useEffect(() => {
    setIsSticky(initIsSticky);
  }, [initIsSticky]);

  useEffect(() => {
    setHandler({
      stickToScreenMode() {
        // https://github.com/facebook/react/issues/10231#issuecomment-316644950
        // scroll event는 react batch작업이 이루어지지 않음
        // 따라서 강제로 batch 실행(unstable_batchedUpdates)
        // unstable_batchedUpdates(() => {
        // react 18이후 auto batch
        setIsSticky(true);
        setIsIsAbsolute(false);
        // });
      },

      // container bottom를 기준으로해서 sticky를 고정
      stickToContainerBottom() {
        setIsSticky(true);
        setIsIsAbsolute(true);
      },

      unStick() {
        setIsSticky(false);
        setIsIsAbsolute(false);
      },
    });
  }, []);

  return [handler, { isSticky, isAbsolute }];
};

export default useStatusUpdaters;
