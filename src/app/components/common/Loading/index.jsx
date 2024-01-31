import {
  LoadingContext,
  useLoadingContext,
} from "../../../contexts/trashContexts/Loading";

export default function Loading({ children }) {
  const { loading } = useLoadingContext(LoadingContext);
  return (
    <div className="relative">
      {loading && (
        <div className="absolute z-30 flex-col justify-center gap-4 w-28 h-28">
          <div className="text-gray-400 font-bold">Loading...</div>
        </div>
      )}
      <div className={loading ? "opacity-5" : ""}>{children}</div>
    </div>
  );
}
