import type { IChildrenProps } from "../interfaces/IChildrenProps.types";
function Title({ children }: IChildrenProps) {
  return <h2 className="text-[18px] font-bold mb-2">{children}</h2>;
}
export default Title;
