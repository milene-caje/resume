import type { IChildrenProps } from "../interfaces/IChildrenProps.types";
function Tag({ children }: IChildrenProps) {
  return (
    <div className="bg-slate-200 text-slate-900 rounded-md p-2">{children}</div>
  );
}
export default Tag;
