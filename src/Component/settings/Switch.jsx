import { Switch } from "@/./components/ui/switch"

export function SwitchDemo() {
  return (

    <Switch
      onCheckedChange={checked => {
        console.log(checked)
      }}
    />

  )
}

