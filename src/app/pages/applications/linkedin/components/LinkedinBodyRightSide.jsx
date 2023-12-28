import React from "react";
import Promotion from "./Body/Promotion/Promotion";
import PeopleAlsoViewed from "./PeopleAlsoViewed/peopleAlsoViewed";

export default function LinkedinBodyRightSide() {
  return (
    <>
      <div className="h-full">
        <Promotion/>
        <PeopleAlsoViewed/>
      </div>
    </>
  );
}
