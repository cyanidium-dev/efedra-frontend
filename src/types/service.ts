export type Service = {
  _id: string;
  _type: "service";
  category: "dentistry" | "aesthetic";
  title: string;
  order?: number;
  categoryImage: {
    asset: {
      _ref: string;
      _type: "reference";
      url?: string;
    };
  };
  mainImage: {
    asset: {
      _ref: string;
      _type: "reference";
      url?: string;
    };
  };
  shortDescription: string;
  slug: {
    _type: "slug";
    current: string;
  };

  procedureDescription?: {
    text: string;
    images: {
      asset: {
        _ref: string;
        _type: "reference";
        url?: string;
      };
    }[];
    info: string[];
  };

  recommended?: {
    image?: {
      asset: {
        _ref: string;
        _type: "reference";
        url?: string;
      };
    };
    text?: string;
  }[];

  howItGoes?: {
    image: {
      asset: {
        _ref: string;
        _type: "reference";
        url?: string;
      };
    };
    steps: {
      title: string;
      description: string;
    }[];
  };

  advantages?: {
    icon?: {
      asset: {
        _ref: string;
        _type: "reference";
        url?: string;
      };
    };
    title?: string;
    text?: string;
  }[];

  contraindications?: {
    image: {
      asset: {
        _ref: string;
        _type: "reference";
        url?: string;
      };
    };
    items?: string[];
  };

  types?: {
    title: string;
    list: {
      image: {
        asset: {
          _ref: string;
          _type: "reference";
          url?: string;
        };
      };
      title: string;
      text: string;
      details?: string[];
    }[];
  };
};
