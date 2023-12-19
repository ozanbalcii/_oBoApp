import { Button } from '@mui/material'
import React from 'react'
import SVG from '../../../../assets/svg/SVG'

export default function FrameButtons() {
  return (
    <>
          <div className="bg-[#09060f] flex items-center gap-2 p-1 pl-4 pt-1 pb-1">
          <Button
            icon={
              <SVG
                icon="x, cancel, close"
                className="rounded-md font-bold transition-all text-center"
                size={10}
              />
            }
            className="bg-red-400 rounded-full w-4 h-4 "
          />
          <Button
            icon={
              <SVG
                icon="enlarge2"
                className="rounded-md font-bold transition-all"
                size={11}
              />
            }
            className="relative bg-yellow-400 rounded-full h-4 w-4 flex items-center justify-center"
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          />
          <Button
            icon={
              <SVG
                icon="minus"
                className="rounded-md font-bold transition-all"
                size={5}
              />
            }
            className="bg-green-400  rounded-full h-4 w-4 flex items-center justify-center"
          />

          <div className="pl-5">
            <div className="text-white border-y border-gray-500 rounded-xl p-1 hover:bg-slate-900 ">
              <Button className="flex gap-3 items-center font-thin text-[15px]">
                <SVG icon="linkedin" className="rounded-md" size={23} />
                <span>Linkedin</span>
                <Button
                  className="ml-auto"
                  icon={<SVG icon="x, cancel, close" size={10} />}
                />
              </Button>
            </div>
          </div>
        </div>
    </>
  )
}
