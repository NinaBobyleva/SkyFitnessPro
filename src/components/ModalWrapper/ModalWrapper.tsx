export function ModalWrapper({ children }: { children: React.ReactNode }) {
    return(
        <div className="fixed rounded-[30px] left-[calc(50%-(343px/2))] md:left-[calc(50%-(370px/2))] top-[calc(50%-(439px/2))]">
            {children}
        </div>
    );
}