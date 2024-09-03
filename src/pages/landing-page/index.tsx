import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./index.less";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";

const LandingPage = () => {
  const [codes, setCodes] = useState(new Array(6).fill(""));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (/^\d$/.test(value) || value === "") {
      const newValues = [...codes];
      newValues[index] = value;
      setCodes(newValues);
      // 自动跳转到下一个输入框
      if (value !== "" && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && codes[index] === "" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="header_icon"></div>
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            const ready = mounted && authenticationStatus !== 'loading';
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === 'authenticated');

            return (() => {
              if (!connected) {
                return (
                  <div onClick={openConnectModal} className="login">
                    Login
                  </div>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()
          }}
        </ConnectButton.Custom>
      </div>
      <div className="content_one">
        <div className="line1_left">
          <div className="line1_left_text1">Innovation</div>
          <div className="line1_left_text2">Social</div>
          <div className="line1_left_text3">Connection</div>
        </div>
        <div className="line2_left">across Multi-Chain</div>
        <div className="line3_left">engagement and security</div>
        <div className="line1_right">Enter your invitation code:</div>
        <div className="line2_right">
          {codes.map((value, index) => (
            <input
              key={index}
              ref={(el: HTMLInputElement) => (inputsRef.current[index] = el)}
              type="text"
              className="code_input"
              value={value}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength={1}
            />
          ))}
        </div>
        <div className="line3_right">Don't have one? Visit our Discord</div>
      </div>
      <div className="content_two">
        <div className="line1_left">Redefine Social Identity with DST</div>
        <div className="line2_left">
          Social interactions shape on-chain token and influence your digital
          presence
        </div>
        <div className="learn-more">Learn more</div>
        <div className="content_two_pict" />
      </div>
      <div className="content_three">
        <div className="content_three_pict" />
        <div className="line1_right">Social Rebate</div>
        <div className="line2_right">
          Labeling the post will reward both of you.
        </div>
        <div className="learn-more">Learn more</div>
      </div>
      <div className="content_four">
        <div className="four_text">Stake and earn with your favorite blockchains</div>
        <div className="staking_button">Go to staking</div>
      </div>
    </div>
  );
};

export default LandingPage;
