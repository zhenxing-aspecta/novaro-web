import {Button} from "@web3uikit/core";
import {useState} from "react";
interface NovButtonProps {
    text?: string;
    width?: string;
    backgroundColor?: string;
    textColor?: string;
    icon?: JSX.Element; // 使用 JSX.Element 类型
    onClick?: () => void; // 添加 onClick 属性
}
const NovButton: React.FC<NovButtonProps> = ({text, width, backgroundColor, textColor, icon,onClick}) => {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        if (onClick) {
            onClick(); // 执行传入的 onClick 回调
        }
        // 模拟异步操作
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };
    return (
        <Button
            style={{
                width: width || "87px",
                height: "40px",
                background: backgroundColor || '#436BD1',
                borderRadius: "4px",
                border: 0,
                color: textColor || "#fff",
                fontSize: "16px"
            }}
            loadingText=""
            icon={icon}
            onClick={handleClick}
            text={text || ''}
            isLoading={loading}  // 控制按钮的加载状态
            disabled={loading}   // 当加载时禁用按钮
        />
    )
}
export default NovButton;
