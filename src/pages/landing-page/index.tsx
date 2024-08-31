import { ConnectButton } from '@rainbow-me/rainbowkit';
import './index.less';

const LandingPage = () => {
    return (
        <div className='container'>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding: 12,
                }}
            >
                <ConnectButton />
            </div>
        </div>
    );
}

export default LandingPage;
