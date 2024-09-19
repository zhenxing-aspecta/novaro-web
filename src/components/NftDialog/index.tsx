import NovButton from "../Basic/Button/NovButton.tsx";
import emptyImage from "../../assets/svg/emptyImage.svg"
import close from "../../assets/svg/close.svg"
import start from "../../assets/svg/start.svg"
import "./index.less";
import React, { useState } from "react";
// import {useBlockchain} from "../../contexts/BlockchainContext.tsx";


interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
}

const NftDialog: React.FC<DialogProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const [tokenName, setTokenName] = useState('');
    const [tokenSymbol, setTokenSymbol] = useState('');
    const [description, setDescription] = useState('');
    const [uploadedImage, setUploadedImage] = useState<string | null>(null); // TODO 用于存储上传的图片
    // const [uploadedImage, setUploadedImage] = useState<string | null>('null'); // 用于存储上传的图片
    // const { createToken } = useBlockchain(); // 获取 createToken 方法
    // 处理 Token Name 输入变化
    const handleTokenNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTokenName(e.target.value);
    };

    // 处理 Token Symbol 输入变化
    const handleTokenSymbolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTokenSymbol(e.target.value);
    };

    // 处理 Token Description 输入变化
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    // 处理图片上传
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setUploadedImage(reader.result as string); // 将文件转换为base64格式并存储
            };
            reader.readAsDataURL(file); // 读取文件内容
        }
    };

    // 提交代币创建请求
    const handleSubmit = async () => {
        console.log('login')
        if (!tokenName || !tokenSymbol || !description || !uploadedImage) {
            alert("请确保所有字段都已填写");
            return;
        }

        try {
            // await createToken(tokenName, tokenSymbol, uploadedImage, description);
            alert("代币创建成功");
            onClose(); // 关闭对话框
        } catch (error) {
            alert("代币创建失败");
            console.error(error);
        }
    };

    return (
        <div className="nft-dialog-overlay">
            <div className="nft-dialog-content">
                <button className="nft-dialog-close" onClick={onClose}>
                    <img src={close} width={24} height={24}/>
                </button>
                <div className="nft-dialog-body">
                    <div className="nft-dialog-upload">
                        <div className="label-name">Image <span className="start"><img src={start} width={16}
                                                                                       height={16}/></span></div>
                        <div className="upload" onClick={() => document.getElementById("image-upload")?.click()}>
                            <div>
                                <img
                                    src={uploadedImage || emptyImage}
                                    style={
                                        uploadedImage
                                            ? { width: "261px", height: "211px" }
                                            : { width: "74px", height: "74px" }
                                    }
                                />
                                {!uploadedImage && (
                                    <>
                                        <div className="upload-text">Jpeg/Png/Webp/Git</div>
                                        <div className="upload-text">Less Than 4M</div>
                                    </>
                                )}
                                {/*<img src={uploadedImage || emptyImage} width={74} height={74}/>*/}
                                {/*<div className="upload-text">Jpeg/Png/Webp/Git</div>*/}
                                {/*<div className="upload-text">Less Than 4M</div>*/}
                            </div>
                        </div>
                        <input
                            id="image-upload"
                            type="file"
                            accept="image/jpeg, image/png, image/webp, image/gif"
                            style={{display: 'none'}} // 隐藏input
                            onChange={handleImageUpload}
                        />
                    </div>
                    <div className="nft-dialog-inputs">
                        <div>
                            <div className="label">
                                <div className="label-name">Token Name <span className="start"><img src={start}
                                                                                                    width={16}
                                                                                                    height={16}/></span>
                                </div>
                                <div className="limit-num">
                                    {tokenName.length}/20
                                </div>
                            </div>
                            <input type="text" className="nft-dialog-input"
                                   maxLength={20}
                                   onChange={handleTokenNameChange}
                            />
                        </div>
                        <div>
                            <div className="label">
                                <div className="label-name">Token Symbol <span className="start"><img src={start}
                                                                                                      width={16}
                                                                                                      height={16}/></span>
                                </div>
                                <div className="limit-num">
                                    {tokenSymbol.length}/20
                                </div>
                            </div>

                            <input type="text" className="nft-dialog-input"  maxLength={20}
                                   onChange={handleTokenSymbolChange}/>
                        </div>
                    </div>
                </div>

                <div className="nft-dialog-description">
                    <div className="label">
                        <div className="label-name">Token Description
                            <span className="start"><img src={start} width={16} height={16}/></span>
                        </div>
                        <div className="limit-num">
                            {description.length}/256
                        </div>
                    </div>
                    <textarea className="nft-dialog-textarea"  maxLength={256}
                              onChange={handleDescriptionChange}/>
                </div>
                <div className="btn">
                    <NovButton text="Launch" width="278px" onClick={handleSubmit}/>
               </div>
                <div  className="nft-dialog-cost">Cost To Deploy: 20 TRX</div>
            </div>
        </div>
    );
};

export default NftDialog;
