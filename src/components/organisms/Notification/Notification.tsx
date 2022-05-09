import { statusAtom } from "@@recoil/atom/statusAtom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { NotificationContainer, Status, Title } from "./Notification.styled";

const Notification = () => {
  const [statusState, setStatusState] = useRecoilState(statusAtom);
  const [activeNotification, setActiveNotification] = useState(false);

  const { status, title, message } = statusState;

  useEffect(() => {
    if (status) {
      setActiveNotification(true);
    }
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatusState({ status: "", message: "", title: "" });
        setActiveNotification(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  return (
    <NotificationContainer
      activeNotification={activeNotification}
      status={status}
    >
      <Title>{title}</Title>
      <Status>{message}</Status>
    </NotificationContainer>
  );
};

export default Notification;
