import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import siteSettings from './siteSettings'

import { pageType } from "./pageType";
import { pageBuilderType } from "./pageBuilderType";
import { jobType } from "./blocks/jobType";
import { jobsType } from "./blocks/jobsType";
import { featuresType } from "./blocks/featureType";
import { heroType } from "./blocks/heroType";
import { splitImageType } from "./blocks/splitImageType";
import { titleDescription } from './blocks/titleDescriptionType'
import { logoList } from './blocks/logoListType'
import { testimonialSlider } from "./blocks/testimonialSliderType";
import { tabSection } from './blocks/tabSectionType';
import { imageTextSection } from './blocks/imageTextType';
import { cardSectionType } from './blocks/cardSectionType';
// import { careerSubmission } from './careerSubmission';
import { clientList } from './blocks/clientListType';
import { bannerType } from './blocks/bannerType';
import { careerForm } from './careerForm';
import { imageType } from "./blocks/imageType";

import { faqType } from "./blocks/faqType";
import { faqsType } from "./blocks/faqsType";
import { threeColBox } from "./blocks/threeColBox";
import { Quote } from "./blocks/quote";
import { List } from './blocks/listType';
import { formType } from "./blocks/form"; 

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, siteSettings, pageType, bannerType, pageBuilderType, jobType, tabSection, imageTextSection, imageType, threeColBox,
    formType, List, jobsType, featuresType, heroType, splitImageType, titleDescription, logoList, clientList, testimonialSlider, cardSectionType, careerForm, faqsType, faqType, Quote,
  ],
}
