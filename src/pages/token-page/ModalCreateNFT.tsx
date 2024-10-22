import NiceModal, { useModal } from "@ebay/nice-modal-react";
import ModalWrapperUnstyled from "../../components/ModalWrapperUnstyled";

export default NiceModal.create(function ModalCreateNFT() {
  const modal = useModal();
  return (
    <ModalWrapperUnstyled
      disableEscapeKeyDown={false}
      clickOutsideTriggerClose={false}
      afterClose={() => modal.remove()}
      className="px-10 py-8"
    >
      <div className="flex flex-col items-center gap-3">
        <button className="w-[280px] rounded bg-blue-500 text-white flex items-center justify-center h-20 text-xl">
          Launch
        </button>
        <div className="text-black/20">cost to deploy:20 tRX</div>
      </div>
    </ModalWrapperUnstyled>
  );
});
