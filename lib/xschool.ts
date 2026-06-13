export interface AboutImage {
  image: string;
}

export interface Founder {
  title: string;
  description: string;
  name: string;
  position: string;
  image: string;
  linkedin_url: string;
  instagram_url: string;
}

export interface Program {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TextSlider {
  xline1: string;
  xline2: string;
  xline3: string;
}

export interface XschoolData {
  banner_title: string;
  banner_image: string;
  about_title: string;
  about_description: string;
  about_images: AboutImage[];
  founders: Founder[];
  programs: Program[];
  faq_title: string;
  xschool_faq: FAQ[];
  text_slider: TextSlider;
}

export async function getXschool() {
  const res = await fetch(
    "https://admin.wemark.pro/api/tasks-xschool/?format=json",
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}