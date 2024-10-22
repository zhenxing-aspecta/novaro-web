import { useAccount, useReadContract } from "wagmi";
import "./index.less";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import MintButton from "../../components/MintButton";
import dst from "../../abi/tokens/DynamicSocialToken.json";
import { DST_CONTRACT_ADDRESS_LOCAL } from "../../constants";
import { create } from 'ipfs-http-client';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import levelIconUrl from '@/assets/space-page/level-icon.png';
import rockIconUrl from '@/assets/space-page/rock-icon.png'
import { LineChart } from "echarts/charts";
import {
    GridComponent,
    TooltipComponent,
} from 'echarts/components';
import {
    CanvasRenderer,
    // SVGRenderer,
} from 'echarts/renderers';

echarts.use([
    LineChart,
    GridComponent,
    TooltipComponent,
    CanvasRenderer,
]);


const SpacePage = () => {
    const { address } = useAccount();
    const {
        data,
        error,
        isPending
    } = useReadContract({
        address: DST_CONTRACT_ADDRESS_LOCAL,
        abi: dst.abi,
        functionName: "getDstData",
        args: [2],
    })

    console.log("@data", data, error);

    const option = {
        tooltip: {
            trigger: 'axis', // 鼠标悬停显示数据
        },
        grid: {
            top: 30, // 图表距离容器顶部的距离
            left: 36, // 图表距离容器左侧的距离
            right: 33, // 图表距离容器右侧的距离
            bottom: 20, // 图表距离容器底部的距离
            containLabel: true, // 是否包含刻度标签
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
            type: 'value',
            min: 0, // 最小值 0
            max: 100, // 最大值 100
            interval: 50, // 刻度间隔
        },
        series: [
            {
                data: [30, 40, 90, 10, 30, 80, 50],
                type: 'line',
                smooth: false, // 设置为曲线
                lineStyle: {
                    width: 3,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, // 设置渐变方向从左到右
                        [
                            { offset: 0, color: '#59ECC5' }, // 起点颜色
                            { offset: 1, color: '#FFCE42' }, // 终点颜色
                        ]
                    ),
                },
                areaStyle: { // 设置折线图的区域填充样式
                    opacity: 0
                }
            }
        ]
    };

    const records = [{
        id: 1,
        activity: "Collected daily ME",
        point: 550,
        data: "2024-08-18"
    },
    {
        id: 2,
        activity: "No check-ins for 7 consecutive days",
        point: -550,
        data: "2024-08-18"
    },
    {
        id: 3,
        activity: "Collected daily ME",
        point: -350,
        data: "2024-08-18"
    },
    {
        id: 4,
        activity: "Energy collected by",
        point: 450,
        data: "2024-08-18"
    },
    {
        id: 5,
        activity: "Collected daily ME",
        point: 120,
        data: "2024-08-18"
    },
    {
        id: 6,
        activity: "Energy collected by 0x1c...0e83",
        point: 3000,
        data: "2024-08-18"
    }];

    const userInfo = [{ text: 'post', count: '332' }, { text: 'follower', count: '1,200' }, { text: 'following', count: '240' }]

    return (
        <div className="container">
            <div className="content">
                {/* todo: search common components */}
                <div className="search"></div>
                <div className="nft">
                    <div className="progress"></div>
                    <div className="grade">
                        <img className="level-icon" src={levelIconUrl} />
                        <div className="level-text">Level 1</div>
                        <div className="gap-line" />
                        <img className="rock-icon" src={rockIconUrl} />
                        <div className="level-text">rock 18,000</div>
                    </div>
                    <div className="active-btn"></div>
                </div>
                <div className="data">
                    <div className="mint-value">
                        <div className="mint-text">Daily Social Mint</div>
                        <div className="mint-count">232</div>
                    </div>
                    <div className="statistics">
                        <div className="statistic-header">
                            <div className="header-text">Social Mint Statistics</div>
                            <div className="header-text">Date</div>
                        </div>
                        <ReactEChartsCore echarts={echarts} option={option} />
                    </div>
                </div>
                <div className="activity-record">
                    <div className="record-title">Mint Energy Activities (Recent 30 days)</div>
                    <div className="table-header">
                        <div className="table-activity">Activities</div>
                        <div className="table-points">Points</div>
                        <div className="table-data">Data</div>
                    </div>
                    {records.map(({ activity, point, data, id }) => <div key={id} className="table-item">
                        <div className="item-activity">{activity}</div>
                        <div className={`item-point ${point > 0 ? 'item-point-got' : 'item-point-use'}`}>{(point > 0 ? '+' : '') + point}</div>
                        <div className="item-data">{data}</div>
                    </div>)}
                </div>
            </div>
            <div className="profile">
                <div className="edit"></div>
                <div className="avatar-img"></div>
                <div className="user-name">Esther Howard</div>
                <div className="user-acount">@Esther Howard</div>
                <div className="user-data">
                    {userInfo.map(({ text, count }) => <div className="info-item">
                        <div className="info-count">{count}</div>
                        <div className="info-text">{text}</div>
                    </div>)}
                </div>
                <div className="invitation">
                    <div className="invitation-code">323 884</div>
                    <div className="invitation-text">Invitation code</div>
                    <div className="invitation-copy"></div>
                </div>
                <div className="dst-account-title">DST Account</div>
                <div className="dst-account-address">0x1d8E4495d281A311b6e472112e51681431B4426e</div>
                <div className="wallet">
                    <div className="wallet-title">Wallet</div>
                    <div className="wallet-info">...</div>
                </div>
                <div className="tokens">
                    <div className="tokens-title">
                        <div className="token-icon"></div>
                        <div className="token-text">Tokens</div>
                        <div className="token-count">3/11</div>
                    </div>
                </div>
            </div>
            {/* <ConnectButton />
            <div className="box">
                <div>isPending: {isPending? 'true': 'false'}</div>
                <div>data</div>
            </div>
            <MintButton /> */}

        </div>
    )
}
export default SpacePage
