import bypassRule from "axe-core/lib/rules/bypass"

const bypass = {
  ...bypassRule,
  axeId: "bypass",
  wcagId: "2.4.1",
}

export default bypass
