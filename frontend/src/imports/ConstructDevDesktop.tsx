import svgPaths from "./svg-nrjcgr4q04";
import imgImage from "figma:asset/8ae6b78145a41c7d4490b529e1350c7a15c1c2b0.png";
import imgImage1 from "figma:asset/8410421760a1d164d08527cf8780ec84c55aa884.png";
import imgImage2 from "figma:asset/9333dbfd96156981d7444169ea92aa972ca6be65.png";
import imgImage3 from "figma:asset/c6312101b508e020b1af49fbf6d06ab49490206b.png";
import imgImage4 from "figma:asset/2011bcbaee24b0431327d9b378a71b4cc54cbe62.png";
import imgImage5 from "figma:asset/78b051ea5bfd363ab0a6dddf635877fcdde3673d.png";
import imgImage6 from "figma:asset/ccd235adb633fc38796cfce3eb01c5a4cca71c79.png";

function Button() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-center px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#1d4fd7] text-[18px] text-center text-nowrap uppercase">Home</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-center px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-center text-nowrap uppercase">Services</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-center px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-center text-nowrap uppercase">Projects</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-center px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#81807e] text-[18px] text-center text-nowrap uppercase">About</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#1b4bce] content-stretch flex items-center px-[24px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#fefcfb] text-[18px] text-center text-nowrap uppercase">Contact Us</p>
    </div>
  );
}

function ButtonsContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Buttons Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-[#1a1a1a] content-stretch flex items-center justify-between left-[50px] pl-[50px] pr-[24px] py-[24px] rounded-[16px] top-[30px] w-[1820px]" data-name="Navbar">
      <div aria-hidden="true" className="absolute border border-[#1c1c21] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Zen_Dots:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#fefcfb] text-[0px] text-[32px] text-center text-nowrap uppercase">
        C<span className="capitalize">onstruct</span>
        <span className="capitalize text-[#1b4bce]">Dev</span>
      </p>
      <ButtonsContainer />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2e1cc100} id="Vector" stroke="var(--stroke-0, #FEFCFB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#1b4bce] content-stretch flex gap-[10px] items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <Icon />
      <div className="absolute left-[calc(50%+0.5px)] size-[77px] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="Shape">
        <div className="absolute inset-[0_11.69%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.0011 77">
            <path d={svgPaths.p3255d000} fill="var(--fill-0, #1B4BCE)" id="Shape" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] left-[60px] not-italic text-[24px] text-nowrap text-white top-[7px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Your Tech partner
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#f9efec] text-[78px] text-nowrap uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <span className="text-[#1b4bce]">Digital</span>
        <span>{` Solutions`}</span>
      </p>
      <Button5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#f9efec] text-[78px] text-nowrap uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <span>{`That Drive `}</span>
        <span className="text-[#1b4bce]">Success</span>
      </p>
    </div>
  );
}

function SubContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Sub Container">
      <Container />
      <Container1 />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-0 pr-[120px] py-0 relative w-full">
          <p className="basis-0 font-['Roboto_Flex:Regular',sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#b3b3b2] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            <span>{`At `}</span>ConstructDev, we believe in t<span style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>ransform</span>ing<span style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{` your vision into immersive digital experiences with cutting-edge development, stunning design, and innovative solutions.`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1d4fd7] text-[20px] text-nowrap uppercase">Digital Marketing</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #1B4BCE)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f0f4fd] text-[20px] text-nowrap uppercase">Website Design</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #1B4BCE)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1d4fd7] text-[20px] text-nowrap uppercase">Branding</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #1B4BCE)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f0f4fd] text-[20px] text-nowrap uppercase">Website Development</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #1B4BCE)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1d4fd7] text-[20px] text-nowrap uppercase">Mobile App Development</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #1B4BCE)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f0f4fd] text-[20px] text-nowrap uppercase">Digital Marketing</p>
    </div>
  );
}

function SubContainer1() {
  return (
    <div className="absolute bg-[#0f0f0f] bottom-[20px] content-stretch flex flex-col items-center justify-center left-[20px] overflow-clip p-[20px] rounded-[12px] w-[1167px]" data-name="Sub Container">
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[20px] shrink-0" data-name="Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center justify-center pb-[180px] pt-[100px] px-[80px] relative w-full">
          <SubContainer />
          <TextContainer />
          <SubContainer1 />
        </div>
      </div>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Text Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.5] not-italic p-[30px] relative w-full">
          <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[24px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Estatein Real Estate
          </p>
          <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{`Website Development. `}</p>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute right-[13px] size-[88px] top-[31px]" data-name="Button">
      <div className="absolute inset-[-17.52%_0_-34.09%_-34.09%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118 133.42">
          <g id="Button">
            <rect fill="var(--fill-0, #1B4BCE)" height="88" rx="44" width="88" x="30.0002" y="15.4194" />
            <g id="Icon">
              <path clipRule="evenodd" d={svgPaths.p1f7a9500} fill="var(--fill-0, #FEFCFB)" fillRule="evenodd" id="Vector 431 (Stroke)" />
            </g>
            <path d={svgPaths.p23a27600} fill="var(--fill-0, #1B4BCE)" id="Shape" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[14px] shrink-0 w-[593px]" data-name="Container">
      <div className="h-[465px] relative shrink-0 w-full" data-name="Image">
        <img alt="" className="block max-w-none size-full" height="465" src={imgImage} width="593" />
      </div>
      <TextContainer1 />
      <Button6 />
    </div>
  );
}

function SubContainer2() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Text Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start leading-[1.5] px-[20px] py-[30px] relative text-center uppercase w-full">
          <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium relative shrink-0 text-[#b3b3b2] text-[18px] w-full">Clients</p>
          <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold not-italic relative shrink-0 text-[#1d4fd7] text-[60px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            200+
          </p>
        </div>
      </div>
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Text Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start leading-[1.5] px-[20px] py-[30px] relative text-center w-full">
          <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium relative shrink-0 text-[#b3b3b2] text-[18px] w-full">PROJECTS</p>
          <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold not-italic relative shrink-0 text-[#1d4fd7] text-[60px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            280+
          </p>
        </div>
      </div>
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Text Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start leading-[1.5] px-[20px] py-[30px] relative text-center w-full">
          <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium relative shrink-0 text-[#b3b3b2] text-[18px] w-full">HAPPY CLIENTS</p>
          <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold not-italic relative shrink-0 text-[#1d4fd7] text-[60px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            100%
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3261280} fill="var(--fill-0, #F0F4FD)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-start p-[20px] relative rounded-[100px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon1 />
    </div>
  );
}

function Button7() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow h-full min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[30px] relative size-full">
          <IconContainer />
          <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#f0f4fd] text-[20px] text-nowrap uppercase">Know More</p>
        </div>
      </div>
    </div>
  );
}

function SubContainer3() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full" data-name="Sub Container">
      <div aria-hidden="true" className="absolute border-2 border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[20px] items-center justify-center p-[20px] relative w-full">
          <TextContainer2 />
          <TextContainer3 />
          <TextContainer4 />
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <Button7 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[49px] top-[191px] w-[1821px]" data-name="Container">
      <SubContainer2 />
      <SubContainer3 />
    </div>
  );
}

function TextContainer5() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[50px] pr-[300px] py-[50px] relative w-full">
          <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f9efec] text-[48px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            <span className="text-[#1b4bce]">Reasons to Choose</span>
            <span>{` ConstructDev`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function TextContainer6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#1b4bce] text-[30px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Expertise in Cutting-Edge Technologies
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        ConstructDev ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3261280} fill="var(--fill-0, #F0F4FD)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-start p-[20px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Button8 />
      <p className="basis-0 font-['Roboto_Flex:Regular',sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#f0f4fd] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Learn More
      </p>
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative w-full">
          <TextContainer6 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function TextContainer7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#1b4bce] text-[30px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Proven Track Record of Success
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        ConstructDev demonstrates a consistent ability to meet and exceed client expectations, providing reliable and effective web solutions tailored to diverse needs.
      </p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3261280} fill="var(--fill-0, #F0F4FD)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-start p-[20px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Button9 />
      <p className="basis-0 font-['Roboto_Flex:Regular',sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#f0f4fd] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Learn More
      </p>
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative w-full">
          <TextContainer7 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function TextContainer8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#1b4bce] text-[30px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Client-Centric Approach
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{`At ConstructDev, we prioritize understanding our clients' unique requirements, fostering transparent communication throughout the development process.`}</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3261280} fill="var(--fill-0, #F0F4FD)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-start p-[20px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Button10 />
      <p className="basis-0 font-['Roboto_Flex:Regular',sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#f0f4fd] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Learn More
      </p>
    </div>
  );
}

function Card2() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative w-full">
          <TextContainer8 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function TextContainer9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#1b4bce] text-[30px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Dedicated Team of Professionals
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure web solutions for your business.
      </p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3261280} fill="var(--fill-0, #1D4FD7)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-start p-[20px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon5 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Button11 />
      <p className="basis-0 font-['Roboto_Flex:Regular',sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#f0f4fd] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Learn More
      </p>
    </div>
  );
}

function Card3() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative w-full">
          <TextContainer9 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function ItemsContainer() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Items Container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[49px] p-[20px] rounded-[24px] top-[1113px] w-[1821px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <TextContainer5 />
      <ItemsContainer />
    </div>
  );
}

function TextContainer10() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[50px] relative w-full">
          <p className="basis-0 font-['Roboto_Flex:SemiBold',sans-serif] font-semibold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#f9efec] text-[48px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            <span>{`Our `}</span>
            <span className="text-[#1b4bce]">Services</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function BoldNetworkItProgrammingCodeCircle() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Bold / Network, IT, Programming / Code Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Bold / Network, IT, Programming / Code Circle">
          <path clipRule="evenodd" d={svgPaths.p2e34ee70} fill="var(--fill-0, #F0F4FD)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[16px] relative rounded-[12px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <BoldNetworkItProgrammingCodeCircle />
    </div>
  );
}

function SubContainer4() {
  return (
    <div className="basis-0 content-stretch flex gap-[14px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Sub Container">
      <IconContainer1 />
      <p className="basis-0 font-['Roboto_Flex:Medium',sans-serif] font-medium grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#1b4bce] text-[30px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{`Web Design & Development`}</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, #F0F4FD)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon6 />
    </div>
  );
}

function SubContainer5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Sub Container">
      <Button12 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#f0f4fd] text-[20px] text-nowrap uppercase">Book A Call</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <SubContainer4 />
      <SubContainer5 />
    </div>
  );
}

function TextContainer11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.
      </p>
    </div>
  );
}

function Card4() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Card">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[50px] items-start justify-center p-[80px] relative w-full">
          <Container11 />
          <TextContainer11 />
        </div>
      </div>
    </div>
  );
}

function BoldElectronicDevicesSmartphone() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Bold / Electronic, Devices / Smartphone 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Bold / Electronic, Devices / Smartphone 2">
          <path clipRule="evenodd" d={svgPaths.p3d2b8100} fill="var(--fill-0, #F0F4FD)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[16px] relative rounded-[12px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <BoldElectronicDevicesSmartphone />
    </div>
  );
}

function SubContainer6() {
  return (
    <div className="basis-0 content-stretch flex gap-[14px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Sub Container">
      <IconContainer2 />
      <p className="basis-0 font-['Roboto_Flex:Medium',sans-serif] font-medium grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#1b4bce] text-[30px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Seo Optimization
      </p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, #F0F4FD)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon7 />
    </div>
  );
}

function SubContainer7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Sub Container">
      <Button13 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#f0f4fd] text-[20px] text-nowrap uppercase">Book A Call</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <SubContainer6 />
      <SubContainer7 />
    </div>
  );
}

function TextContainer12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go.
      </p>
    </div>
  );
}

function Card5() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Card">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[50px] items-start justify-center p-[80px] relative w-full">
          <Container12 />
          <TextContainer12 />
        </div>
      </div>
    </div>
  );
}

function ItemsContainer1() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Items Container">
      <Card4 />
      <Card5 />
    </div>
  );
}

function BoldDesignToolsRulerCrossPen() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Bold / Design, Tools / Ruler Cross Pen">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Bold / Design, Tools / Ruler Cross Pen">
          <g id="Vector">
            <path d={svgPaths.p3527ecf0} fill="var(--fill-0, #F0F4FD)" />
            <path d={svgPaths.p123c4000} fill="var(--fill-0, #F0F4FD)" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p2670a00} fill="var(--fill-0, #F0F4FD)" />
            <path d={svgPaths.p3a5f3e00} fill="var(--fill-0, #F0F4FD)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[16px] relative rounded-[12px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <BoldDesignToolsRulerCrossPen />
    </div>
  );
}

function SubContainer8() {
  return (
    <div className="basis-0 content-stretch flex gap-[14px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Sub Container">
      <IconContainer3 />
      <p className="basis-0 font-['Roboto_Flex:Medium',sans-serif] font-medium grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#1b4bce] text-[30px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Branding
      </p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, #F0F4FD)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon8 />
    </div>
  );
}

function SubContainer9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Sub Container">
      <Button14 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#f0f4fd] text-[20px] text-nowrap uppercase">Book A Call</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <SubContainer8 />
      <SubContainer9 />
    </div>
  );
}

function TextContainer13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Our Branding service is all about creating visually stunning and user-focused Identity that leaves a lasting impression.
      </p>
    </div>
  );
}

function Card6() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Card">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[50px] items-start justify-center p-[80px] relative w-full">
          <Container13 />
          <TextContainer13 />
        </div>
      </div>
    </div>
  );
}

function BoldSettingsFineTuningWidget() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Bold / Settings, Fine Tuning / Widget 6">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Bold / Settings, Fine Tuning / Widget 6">
          <g id="Vector">
            <path d={svgPaths.p70aa500} fill="#F0F4FD" />
            <path d={svgPaths.p319d5c00} fill="#F0F4FD" />
            <path d={svgPaths.p176d4100} fill="#F0F4FD" />
            <path d={svgPaths.pfc7fe00} fill="#F0F4FD" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[16px] relative rounded-[12px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <BoldSettingsFineTuningWidget />
    </div>
  );
}

function SubContainer10() {
  return (
    <div className="basis-0 content-stretch flex gap-[14px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Sub Container">
      <IconContainer4 />
      <p className="basis-0 font-['Roboto_Flex:Medium',sans-serif] font-medium grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#1b4bce] text-[30px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Ai Integration
      </p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, #F0F4FD)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon9 />
    </div>
  );
}

function SubContainer11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Sub Container">
      <Button15 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#f0f4fd] text-[20px] text-nowrap uppercase">Book A Call</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <SubContainer10 />
      <SubContainer11 />
    </div>
  );
}

function TextContainer14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{`In the digital age, artificial intelligence is a critical aspect of your business's success. Our AI Integration service employs robust automation systems to enhance your business.`}</p>
    </div>
  );
}

function Card7() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Card">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[50px] items-start justify-center p-[80px] relative w-full">
          <Container14 />
          <TextContainer14 />
        </div>
      </div>
    </div>
  );
}

function ItemsContainer2() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Items Container">
      <Card6 />
      <Card7 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[49px] p-[20px] rounded-[24px] top-[1847px] w-[1821px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <TextContainer10 />
      <ItemsContainer1 />
      <ItemsContainer2 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3261280} fill="var(--fill-0, #F0F4FD)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex items-start p-[20px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon10 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Button16 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[20px] text-nowrap uppercase">ALL Works</p>
    </div>
  );
}

function SubContainer12() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="Sub Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[50px] relative w-full">
          <p className="basis-0 font-['Roboto_Flex:SemiBold',sans-serif] font-semibold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#f9efec] text-[48px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            <span>{`Our `}</span>
            <span className="text-[#1b4bce]">Works</span>
          </p>
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function BoldEssentionalUiMagicStick() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Bold / Essentional, UI / Magic Stick 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Bold / Essentional, UI / Magic Stick 2">
          <path d={svgPaths.p2fe78780} fill="var(--fill-0, #F0F4FD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer5() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[16px] relative rounded-[12px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <BoldEssentionalUiMagicStick />
    </div>
  );
}

function SubContainer13() {
  return (
    <div className="basis-0 content-stretch flex gap-[14px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Sub Container">
      <IconContainer5 />
      <p className="basis-0 font-['Roboto_Flex:Medium',sans-serif] font-medium grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#1b4bce] text-[24px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Zenith Fitness App
      </p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, #F0F4FD)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon11 />
    </div>
  );
}

function SubContainer14() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Sub Container">
      <Button17 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[20px] text-nowrap uppercase">Details</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <SubContainer13 />
      <SubContainer14 />
    </div>
  );
}

function TextContainer15() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative rounded-[45px] shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[18px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Category
      </p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #1B4BCE)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#e6e6e6] text-[18px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Branding
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <TextContainer15 />
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col gap-[40px] items-start justify-center px-[40px] py-[60px] relative rounded-[14px] self-stretch shrink-0 w-[1184px]" data-name="Card">
      <Container17 />
      <Container18 />
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.
      </p>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[20px] items-start p-[20px] relative w-full">
          <Card8 />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[14px] self-stretch shrink-0" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[14px] size-full" src={imgImage1} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function BoldEssentionalUiBalloon() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Bold / Essentional, UI / Balloon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Bold / Essentional, UI / Balloon">
          <path clipRule="evenodd" d={svgPaths.p2f781600} fill="var(--fill-0, #F0F4FD)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p114fb500} fill="var(--fill-0, #F0F4FD)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer6() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[16px] relative rounded-[12px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <BoldEssentionalUiBalloon />
    </div>
  );
}

function SubContainer15() {
  return (
    <div className="basis-0 content-stretch flex gap-[14px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Sub Container">
      <IconContainer6 />
      <p className="basis-0 font-['Roboto_Flex:Medium',sans-serif] font-medium grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#1b4bce] text-[24px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        A-Aura Ecommerce
      </p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, #F0F4FD)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon12 />
    </div>
  );
}

function SubContainer16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Sub Container">
      <Button18 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[20px] text-nowrap uppercase">Details</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <SubContainer15 />
      <SubContainer16 />
    </div>
  );
}

function TextContainer16() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative rounded-[45px] shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[18px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Category
      </p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #1B4BCE)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#e6e6e6] text-[18px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{`Web Design & Development`}</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <TextContainer16 />
    </div>
  );
}

function Card9() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col gap-[40px] items-start justify-center px-[40px] py-[60px] relative rounded-[14px] self-stretch shrink-0 w-[1184px]" data-name="Card">
      <Container20 />
      <Container21 />
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        A complete overhaul of a corporate website to enhance its brand identity and user experience.
      </p>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[20px] items-start p-[20px] relative w-full">
          <Card9 />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[14px] self-stretch shrink-0" data-name="Image">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]">
              <div className="absolute bg-white inset-0 rounded-[14px]" />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[14px] size-full" src={imgImage2} />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function SubContainer17() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <Container19 />
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[49px] top-[2863px] w-[1821px]" data-name="Container">
      <SubContainer12 />
      <SubContainer17 />
    </div>
  );
}

function SubContainer18() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="Sub Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[50px] relative w-full">
          <p className="basis-0 font-['Roboto_Flex:SemiBold',sans-serif] font-semibold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#f9efec] text-[48px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            <span>{`Frequently Asked `}</span>
            <span className="text-[#1b4bce]">{`Questions `}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function TextContainer17() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#f9efec] text-[22px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        How long does it take to complete a web development project?
      </p>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 833 1">
            <line id="Line" stroke="var(--stroke-0, #262626)" x2="833" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{`The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.`}</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3da07f00} fill="var(--fill-0, #1D4FD7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon13 />
    </div>
  );
}

function FaqItemOpen() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="FAQ Item Open">
      <div className="size-full">
        <div className="content-stretch flex gap-[50px] items-start p-[60px] relative w-full">
          <TextContainer17 />
          <Button19 />
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p77ba800} fill="var(--fill-0, #F0F4FD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon14 />
    </div>
  );
}

function FaqItem() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="FAQ Item">
      <div aria-hidden="true" className="absolute border border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[30px] items-center px-[60px] py-[40px] relative w-full">
          <p className="basis-0 font-['Roboto_Flex:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#f9efec] text-[22px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Can you handle large-scale mobile app development projects?
          </p>
          <Button20 />
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p77ba800} fill="var(--fill-0, #F0F4FD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon15 />
    </div>
  );
}

function FaqItem1() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="FAQ Item">
      <div aria-hidden="true" className="absolute border border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[30px] items-center px-[60px] py-[40px] relative w-full">
          <p className="basis-0 font-['Roboto_Flex:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#f9efec] text-[22px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Can you integrate third-party APIs into our mobile app?
          </p>
          <Button21 />
        </div>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p77ba800} fill="var(--fill-0, #F0F4FD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon16 />
    </div>
  );
}

function FaqItem2() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="FAQ Item">
      <div aria-hidden="true" className="absolute border border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[30px] items-center px-[60px] py-[40px] relative w-full">
          <p className="basis-0 font-['Roboto_Flex:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#f9efec] text-[22px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            How do you ensure cross-platform compatibility for mobile apps?
          </p>
          <Button22 />
        </div>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p77ba800} fill="var(--fill-0, #F0F4FD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon17 />
    </div>
  );
}

function FaqItem3() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="FAQ Item">
      <div aria-hidden="true" className="absolute border border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[30px] items-center px-[60px] py-[40px] relative w-full">
          <p className="basis-0 font-['Roboto_Flex:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#f9efec] text-[22px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            What is your approach to user experience (UX) design?
          </p>
          <Button23 />
        </div>
      </div>
    </div>
  );
}

function ItemsContainer3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Items Container">
      <FaqItemOpen />
      <FaqItem />
      <FaqItem1 />
      <FaqItem2 />
      <FaqItem3 />
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-[#0f0f0f] relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative w-full">
          <p className="basis-0 font-['Roboto_Flex:Regular',sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#676665] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Enter your name
          </p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#f3dfd8] text-[18px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Name
      </p>
      <InputField />
    </div>
  );
}

function InputField1() {
  return (
    <div className="bg-[#0f0f0f] relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative w-full">
          <p className="basis-0 font-['Roboto_Flex:Regular',sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#676665] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Enter your email
          </p>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#f3dfd8] text-[18px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Email
      </p>
      <InputField1 />
    </div>
  );
}

function InputField2() {
  return (
    <div className="bg-[#0f0f0f] h-[172px] relative rounded-[10px] shrink-0 w-full" data-name="Input Field">
      <div className="size-full">
        <div className="content-stretch flex items-start p-[24px] relative size-full">
          <p className="basis-0 font-['Roboto_Flex:Regular',sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#676665] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Enter Your Question Here .....
          </p>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#f3dfd8] text-[18px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Your Question
      </p>
      <InputField2 />
    </div>
  );
}

function FormElements() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Form Elements">
      <Container24 />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-[#1b4bce] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[18px] relative w-full">
          <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#fefcfb] text-[18px] text-center text-nowrap uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Send Your Message
          </p>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col gap-[50px] items-center justify-center p-[60px] relative rounded-[14px] shadow-[10px_10px_50px_0px_rgba(0,98,255,0.03)] shrink-0 w-[746px]" data-name="Form">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#f0f4fd] text-[24px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Ask your question
      </p>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 626 1">
            <line id="Line" stroke="var(--stroke-0, #262626)" x2="626" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <FormElements />
      <Button24 />
    </div>
  );
}

function FaqContainer() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="FAQ Container">
      <ItemsContainer3 />
      <Form />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[49px] top-[4691px] w-[1821px]" data-name="Container">
      <SubContainer18 />
      <FaqContainer />
    </div>
  );
}

function TextContainer18() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Roboto_Flex:Medium',sans-serif] font-medium gap-[4px] grow items-start leading-[1.5] min-h-px min-w-px not-italic relative shrink-0" data-name="Text Container">
      <p className="relative shrink-0 text-[58px] text-white uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Ready to Transform Your Digital Presence?
      </p>
      <p className="relative shrink-0 text-[#1a1a1a] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Take the first step towards digital success with ConstructDev by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.
      </p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3261280} fill="var(--fill-0, #1D4FD7)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button25() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex gap-[10px] items-center justify-center px-[34px] py-[18px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#f3dfd8] text-[18px] text-center text-nowrap uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Get in Touch
      </p>
      <Icon18 />
    </div>
  );
}

function SubContainer19() {
  return (
    <div className="absolute bg-[#1d4fd7] content-stretch flex gap-[250px] items-end justify-center left-[49px] p-[80px] rounded-[20px] top-[5855px] w-[1821px]" data-name="Sub Container">
      <TextContainer18 />
      <Button25 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f0f4fd] text-[20px] text-nowrap uppercase">Follow Us on Social Media</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #1B4BCE)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f0f4fd] text-[20px] text-nowrap uppercase">Follow Us on Social Media</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #1B4BCE)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f0f4fd] text-[20px] text-nowrap uppercase">Follow Us on Social Media</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #1B4BCE)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f0f4fd] text-[20px] text-nowrap uppercase">Follow Us on Social Media</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #1B4BCE)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f0f4fd] text-[20px] text-nowrap uppercase">Follow Us on Social Media</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #1B4BCE)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f0f4fd] text-[20px] text-nowrap uppercase">Follow Us on Social Media</p>
    </div>
  );
}

function SubContainer20() {
  return (
    <div className="absolute bg-[#1a1a1a] content-stretch flex flex-col items-center justify-center left-[49px] overflow-clip p-[20px] rounded-[12px] top-[6220px] w-[1821px]" data-name="Sub Container">
      <Container28 />
    </div>
  );
}

function LinksContainer() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto_Flex:Regular',sans-serif] font-normal gap-[18px] items-start leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[18px] w-full" data-name="Links Container">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Why Us
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        About Us
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Testimonials
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        FAQ’s
      </p>
    </div>
  );
}

function Container29() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="font-['Roboto_Mono:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b4bce] text-[22px] w-full">Home</p>
      <LinksContainer />
    </div>
  );
}

function LinksContainer1() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto_Flex:Regular',sans-serif] font-normal gap-[18px] items-start leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[18px] w-full" data-name="Links Container">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Web Development
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        App Development
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Web Design
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Digital Marketing
      </p>
    </div>
  );
}

function Container30() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="font-['Roboto_Mono:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b4bce] text-[22px] w-full">Services</p>
      <LinksContainer1 />
    </div>
  );
}

function LinksContainer2() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto_Flex:Regular',sans-serif] font-normal gap-[18px] items-start leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[18px] w-full" data-name="Links Container">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Klothink
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Zenith
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Novus
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Apex
      </p>
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="font-['Roboto_Mono:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b4bce] text-[22px] w-full">Projects</p>
      <LinksContainer2 />
    </div>
  );
}

function SubContainer21() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[20px] shrink-0 w-full" data-name="Sub Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[60px] items-start p-[60px] relative w-full">
          <Container29 />
          <Container30 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] text-nowrap">{`Terms & Conditions`}</p>
      <div className="flex flex-row items-center self-stretch">
        <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-[90deg]">
            <div className="h-full relative w-[27px]" data-name="Line">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 1">
                  <line id="Line" stroke="var(--stroke-0, #232329)" x2="27" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] text-nowrap">Privacy Policy</p>
    </div>
  );
}

function SubContainer22() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex items-start justify-between p-[50px] relative rounded-[16px] shrink-0 w-[1821px]" data-name="Sub Container">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[18px] text-nowrap">© 2025 ConstructDev. All rights reserved.</p>
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <SubContainer21 />
      <SubContainer22 />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute inset-[8.33%_8.31%]" data-name="Logo 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.3491 28.3333">
        <g id="Logo 2">
          <path d={svgPaths.pbff5500} fill="var(--fill-0, #1D4FD7)" id="Vector" />
          <path d={svgPaths.pbff5500} fill="var(--fill-0, #F0F4FD)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Icon">
      <Logo />
    </div>
  );
}

function IconContainer7() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[16px] relative rounded-[12px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon19 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, #F0F4FD)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon20 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconContainer7 />
      <Button26 />
    </div>
  );
}

function TextContainer19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[30px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Linkedin
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Share visually appealing snippets of our latest web projects.
      </p>
    </div>
  );
}

function Card10() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-start p-[40px] relative w-full">
          <Container34 />
          <TextContainer19 />
        </div>
      </div>
    </div>
  );
}

function Elements() {
  return (
    <div className="absolute inset-[12.5%_4.51%]" data-name="ELEMENTS">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.934 25.4998">
        <g id="ELEMENTS">
          <path d={svgPaths.p7f44580} fill="var(--fill-0, #F0F4FD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Capa() {
  return (
    <div className="absolute contents inset-[12.5%_4.51%]" data-name="Capa 2">
      <Elements />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Icon">
      <Capa />
    </div>
  );
}

function IconContainer8() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[16px] relative rounded-[12px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon21 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pae702c0} fill="var(--fill-0, #F0F4FD)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button27() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon22 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconContainer8 />
      <Button27 />
    </div>
  );
}

function TextContainer20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[30px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Twitter
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{`Tweet about interesting coding challenges you've overcome.`}</p>
    </div>
  );
}

function Card11() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-start p-[40px] relative w-full">
          <Container35 />
          <TextContainer20 />
        </div>
      </div>
    </div>
  );
}

function SubContainer23() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <Card10 />
      <Card11 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[748px]" data-name="Container">
      <SubContainer23 />
    </div>
  );
}

function SubContainer24() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-start left-[49px] top-[6320px] w-[1821px]" data-name="Sub Container">
      <Container33 />
      <Container36 />
    </div>
  );
}

function SubContainer25() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[16px] shrink-0 w-full" data-name="Sub Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[50px] relative w-full">
          <p className="basis-0 font-['Roboto_Flex:SemiBold',sans-serif] font-semibold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#f9efec] text-[48px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            <span>{`Our `}</span>
            <span className="text-[#1b4bce]">Testimonials</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start leading-[1.5] not-italic p-[40px] relative w-full">
          <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[24px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            NexGen turned our business around!
          </p>
          <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!
          </p>
        </div>
      </div>
    </div>
  );
}

function TextContainer21() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[1.5] min-h-px min-w-px not-italic relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f3dfd8] text-[20px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Sarah Thompson
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#81807e] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        CEO of BlueBloom
      </p>
    </div>
  );
}

function SubContainer26() {
  return (
    <div className="basis-0 content-stretch flex gap-[15px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Sub Container">
      <div className="relative rounded-[100px] shrink-0 size-[60px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
          <div className="absolute bg-[#1b4bce] inset-0 rounded-[100px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[100px] size-full" src={imgImage3} />
        </div>
      </div>
      <TextContainer21 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[40px] py-[30px] relative w-full">
          <SubContainer26 />
        </div>
      </div>
    </div>
  );
}

function Card12() {
  return (
    <div className="basis-0 bg-[#1a1a1a] content-stretch flex flex-col grow items-center min-h-px min-w-px overflow-clip relative rounded-[16px] shrink-0" data-name="Card">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start leading-[1.5] not-italic p-[40px] relative w-full">
          <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[24px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            NexGen turned our business around!
          </p>
          <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!
          </p>
        </div>
      </div>
    </div>
  );
}

function TextContainer22() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[1.5] min-h-px min-w-px not-italic relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f3dfd8] text-[20px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Wade Warren
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#81807e] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Art Director
      </p>
    </div>
  );
}

function SubContainer27() {
  return (
    <div className="basis-0 content-stretch flex gap-[15px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Sub Container">
      <div className="relative rounded-[100px] shrink-0 size-[60px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
          <div className="absolute bg-[#1b4bce] inset-0 rounded-[100px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[100px] size-full" src={imgImage4} />
        </div>
      </div>
      <TextContainer22 />
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[40px] py-[30px] relative w-full">
          <SubContainer27 />
        </div>
      </div>
    </div>
  );
}

function Card13() {
  return (
    <div className="basis-0 bg-[#1a1a1a] content-stretch flex flex-col grow items-center min-h-px min-w-px overflow-clip relative rounded-[16px] shrink-0" data-name="Card">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start leading-[1.5] not-italic p-[40px] relative w-full">
          <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[24px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Working with NexGen was a pleasure.
          </p>
          <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{`Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.`}</p>
        </div>
      </div>
    </div>
  );
}

function TextContainer23() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[1.5] min-h-px min-w-px not-italic relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f3dfd8] text-[20px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Lisa Williams
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#81807e] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        CEO Of HealthTech
      </p>
    </div>
  );
}

function SubContainer28() {
  return (
    <div className="basis-0 content-stretch flex gap-[15px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Sub Container">
      <div className="relative rounded-[100px] shrink-0 size-[60px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
          <div className="absolute bg-[#1b4bce] inset-0 rounded-[100px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[100px] size-full" src={imgImage5} />
        </div>
      </div>
      <TextContainer23 />
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[40px] py-[30px] relative w-full">
          <SubContainer28 />
        </div>
      </div>
    </div>
  );
}

function Card14() {
  return (
    <div className="basis-0 bg-[#1a1a1a] content-stretch flex flex-col grow items-center min-h-px min-w-px overflow-clip relative rounded-[16px] shrink-0" data-name="Card">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start leading-[1.5] not-italic p-[40px] relative size-full">
          <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[24px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{`NexGen's web design team brought our vision to life.`}</p>
          <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.
          </p>
        </div>
      </div>
    </div>
  );
}

function TextContainer24() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[1.5] min-h-px min-w-px not-italic relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f3dfd8] text-[20px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Jennifer Lee
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#81807e] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        COO of Foodie Haven
      </p>
    </div>
  );
}

function SubContainer29() {
  return (
    <div className="basis-0 content-stretch flex gap-[15px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Sub Container">
      <div className="relative rounded-[100px] shrink-0 size-[60px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
          <div className="absolute bg-[#1b4bce] inset-0 rounded-[100px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[100px] size-full" src={imgImage3} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[100px] size-full" src={imgImage6} />
        </div>
      </div>
      <TextContainer24 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[40px] py-[30px] relative w-full">
          <SubContainer29 />
        </div>
      </div>
    </div>
  );
}

function Card15() {
  return (
    <div className="basis-0 bg-[#1a1a1a] content-stretch flex flex-col grow items-center min-h-px min-w-px overflow-clip relative rounded-[16px] self-stretch shrink-0" data-name="Card">
      <Container43 />
      <Container44 />
    </div>
  );
}

function ItemsContainer4() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Items Container">
      <Card12 />
      <Card13 />
      <Card14 />
      <Card15 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[49px] p-[20px] rounded-[24px] top-[3951px] w-[1821px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <SubContainer25 />
      <ItemsContainer4 />
    </div>
  );
}

export default function ConstructDevDesktop() {
  return (
    <div className="bg-black relative size-full" data-name="ConstructDev - Desktop">
      <Navbar />
      <Container5 />
      <Container10 />
      <Container15 />
      <Container23 />
      <Container27 />
      <SubContainer19 />
      <SubContainer20 />
      <SubContainer24 />
      <Container45 />
    </div>
  );
}