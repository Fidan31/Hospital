import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const SelectOne = (props) => {
    const { selectData, selectValue, selectWidth, onSelect, disabled } = props;

    return (
        <div className="flex gap-5 ">
            <Select onValueChange={onSelect} disabled={disabled}>
                <SelectTrigger className="w-[115px] bg-[#E3F2F1] text-[#474A4A] hover:border-[#068F84] hover:text-[#068F84]
     " style={{ width: selectWidth }} >
                    <SelectValue placeholder={selectValue} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup className="max-h-48">
                        {selectData?.map((data) => (
                            <SelectItem key={data} value={data}>
                                {data}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectOne;