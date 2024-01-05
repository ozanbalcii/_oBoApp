import {
  PdfCvContext,
  usePdfCvContext,
} from "../../../../contexts/PdfCvProvider";

export default function Projects() {
  const { loading, info } = usePdfCvContext(PdfCvContext);
  return (
    <>
      {info?.map((item) => (
        <>
          <div className="text-darky font-bold !pb-0 pt-4 border-b-[3px] border-darky text-[20px]">
            PROJECTS
          </div>
          {item?.projectsInfo?.map((projectsInfo) => (
            <div>
              <div
                key={projectsInfo?.id}
                className="text-darky text-[17px] !pb-0 !pt-0"
              >
                <div className="flex gap-3 pt-2 pb-1">
                  <ul list-none>
                    <a
                      className="hover:underline font-[900] pt-2"
                      href={`${projectsInfo?.text2}`}
                      target="_blank"
                    >
                      For more projects: {projectsInfo?.text2}{" "}
                    </a>
                  </ul>
                </div>
                <div className="pb-3">
                  <a
                    className="hover:underline font-[900] pt-2"
                    href={`${projectsInfo?.text1}`}
                    target="_blank"
                  >
                    The project I'm doing right now: {projectsInfo?.text1}
                  </a>
                </div>
              </div>
            </div>
          ))}
          {item?.projects?.map((projects) => (
            <div>
              <div
                key={projects?.id}
                className="text-darky text-[17px] !pb-0 !pt-0"
              >
                <div className="flex gap-3">
                  <ul list-none>
                    <li className="font-[900] pt-2">{projects?.title} </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </>
      ))}
    </>
  );
}
