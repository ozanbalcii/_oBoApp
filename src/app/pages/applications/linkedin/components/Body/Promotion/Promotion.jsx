import {
  LinkedinCustomDataContext,
  useLinkedinCustomDataContext,
} from "../../../../../../contexts/trashContexts/LinkedinCustomProvider";
export default function Promotion() {
  const { customData } = useLinkedinCustomDataContext(
    LinkedinCustomDataContext
  );
  return (
    <>
      <div className="cursor-pointer">
        {customData?.map((data) => (
          <>
            {data?.promotions?.map((promo) => (
              <>
                <img
                  key={promo.id}
                  src={promo?.picture}
                  alt="linkedin-promotoin"
                  className="max-w-full h-auto  xl:grid hidden rounded-[0.395rem]"
                />
              </>
            ))}
          </>
        ))}
      </div>
    </>
  );
}