import {
  LinkedinCustomDataContext,
  useLinkedinCustomDataContext,
} from "../../../../../../contexts/trashContexts/LinkedinCustomProvider";
export default function Promotion() {
  const { customData } = useLinkedinCustomDataContext(
    LinkedinCustomDataContext
  );
  console.log(customData, "customData");
  return (
    <>
      <div className="cursor-pointer">
        {customData?.map((data) => (
          <>
            {data?.promotions?.map((promo) => (
              <>
                <img
                  src={promo?.picture}
                  alt="linkedin-promotoin"
                  className="h-[251px] sm:hidden rounded-[0.395rem] "
                />
              </>
            ))}
          </>
        ))}
      </div>
    </>
  );
}