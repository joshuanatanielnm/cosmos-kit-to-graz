import { MouseEventHandler } from "react";

export type ButtonProps = {
  text?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type ConnectProps = Pick<ButtonProps, "text" | "loading" | "onClick">;

function noop() {}

export function Button({ text, disabled, onClick = noop }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export const ButtonConnect = ({
  text = "Connect Wallet",
  onClick = noop,
}: ConnectProps) => <button onClick={onClick}>{text}</button>;

export const ButtonConnected = ({
  text = "Disconnect Wallet",
  onClick = noop,
}: ConnectProps) => <button onClick={onClick}>{text}</button>;

export const ButtonDisconnected = ({
  text = "Connect Wallet",
  onClick = noop,
}: ConnectProps) => <button onClick={onClick}>{text}</button>;

export const ButtonConnecting = ({ text = "Connecting ..." }: ConnectProps) => (
  <button>{text}</button>
);

export const ButtonRejected = ({
  text = "Reconnect",
  onClick = noop,
}: ConnectProps) => <button onClick={onClick}>{text}</button>;

export const ButtonError = ({
  text = "Change Wallet",
  onClick = noop,
}: ConnectProps) => <button onClick={onClick}>{text}</button>;

export const ButtonNotExist = ({
  text = "Install Wallet",
  onClick = noop,
}: ConnectProps) => <button onClick={onClick}>{text}</button>;
