import classNames from "classnames";
import {MdOutlineDelete, MdPlayArrow, MdFolderOpen} from "react-icons/md";

import Button from "../Button/Button";
import ButtonGroup from "../Button/ButtonGroup";
import {useHover} from "../../utils/useHover.js";

type DownloadCardProps = {
    className?: string;
    fileName: string;
    status: 'progress' | 'done' | 'error' | 'paused';
};

export default function DownloadCard({
    className,
    fileName,
    status,
}: DownloadCardProps) {
    const { hoverRef, isHovered } = useHover();

    const downloadCardClassName = classNames(
        "px-4 py-5 border border-gray-200 h-40 rounded-md grid grid-cols-4 grid-rows-3 grid-flow-row-dense gap-1",
        className,
    );

    const actionsClassName = classNames(
        "transition duration-150 ease-in-out ml-auto",
        {
            "opacity-0": !isHovered,
            "opacity-100": isHovered,
        },
    );

    return (
        <div ref={hoverRef} className={downloadCardClassName}>
            <div className="font-semibold col-span-3">
                {fileName}
            </div>

            <ButtonGroup className={actionsClassName}>
                <Button icon={MdPlayArrow} />
                <Button icon={MdOutlineDelete} />
                <Button icon={MdFolderOpen} />
            </ButtonGroup>
        </div>
    );
}