
import { Select } from "@radix-ui/themes";

export default function CustomSelect({ ...props }) {

    return (
        <Select.Root size="3">
            <Select.Trigger className={props.classes} radius="small" placeholder="Property Type" />
            <Select.Content>
                <Select.Group>
                    <Select.Label>Fruits</Select.Label>
                    <Select.Item value="orange">Orange</Select.Item>
                    <Select.Item value="apple">Apple</Select.Item>
                </Select.Group>
            </Select.Content>
        </Select.Root>
    )
}