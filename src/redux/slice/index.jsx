import { createSlice } from "@reduxjs/toolkit";
import imagF from "./../../assets/imges/posts/Image17.png";
import imagS from "./../../assets/imges/posts/Image20.png";
import imagTH from "./../../assets/imges/posts/Image19.png";
import imagFTH from "./../../assets/imges/posts/Image18.png";
import imagFE from "./../../assets/imges/posts/Image1.png";
import imagSV from "./../../assets/imges/posts/Image2.png";
import imagE from "./../../assets/imges/posts/Image3.png";
import imagN from "./../../assets/imges/posts/Image4.png";
import imagT from "./../../assets/imges/posts/Image5.png";
import imagEL from "./../../assets/imges/posts/Image6.png";
import imgTwo from "./../../assets/imges/details/ImageTwo.png";
import ImageThree from "./../../assets/imges/details/ImageThree.png";
import ImageFour from "./../../assets/imges/details/ImageFour.png";
import ImageFive from "./../../assets/imges/details/ImageFive.png";
import ImageSix from "./../../assets/imges/details/ImageSix.png";
import ImageSeven from "./../../assets/imges/details/ImageSeven.png";
import ImageEight from "./../../assets/imges/details/ImageEight.png";
import imgNine from "./../../assets/imges/details/ImageNine.png";
import imgTen from "./../../assets/imges/details/ImageTen.png";

const initialState = {
  blogs: [
    {
      id: 1,
      imge: imagFE,
      title: "Alec Whitten • 1 Jan 2023",
      text: "Bill Walsh leadership lessons",
      par: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      category: [
        { id: 1, textTwo: "Leadership", design: "bg-btn-barbr text-barbar" },
        {
          id: 2,
          textTwo: "Management",
          design: "bg-[#F8F9FC] text-[#363F72]",
        },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },

    {
      id: 2,
      imge: imagSV,
      title: "Demi WIlkinson • 1 Jan 2023",
      text: "PM mental models",
      par: "Mental models are simple expressions of complex processes or relationships.",
      category: [
        { id: 1, textTwo: "Product", design: "bg-btn-barbr text-barbar" },
        { id: 2, textTwo: "Research", design: "bg-btn-sky-blue text-sky-850" },
        {
          id: 3,
          textTwo: "Frameworks",
          design: "bg-[#FFF6ED] text-[#C4320A]",
        },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },

    {
      id: 3,
      imge: imagE,
      title: "Candice Wu • 1 Jan 2023",
      text: "What is Wireframing?",
      par: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      category: [
        { id: 1, textTwo: "Design", design: "bg-btn-barbr text-barbar" },
        { id: 2, textTwo: "Research", design: "bg-btn-sky-blue text-sky-850" },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },

    {
      id: 4,
      imge: imagN,
      title: "Natali Craig • 1 Jan 2023",
      text: "How collaboration makes us better designers",
      par: "Collaboration can make our teams stronger, and our individual designs better.",
      category: [
        { id: 1, textTwo: "Design", design: "bg-btn-barbr text-barbar" },
        { id: 2, textTwo: "Research", design: "bg-btn-sky-blue text-sky-850" },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },
    {
      id: 5,
      imge: imagT,
      title: "Drew Cano • 1 Jan 2023",
      text: "Our top 10 Javascript frameworks to use",
      par: "JavaScript frameworks make development easy with extensive features and functionalities.",
      category: [
        {
          id: 1,
          textTwo: "Software Development",
          design: "bg-emerald-51 text-btn-green",
        },
        { id: 2, textTwo: "Tools", design: "bg-btn-rose text-btn-bink" },
        { id: 3, textTwo: "SaaS", design: "bg-[#FFF1F3] text-[#C01048]" },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },
    {
      id: 6,
      imge: imagEL,
      title: "Orlando Diggs • 1 Jan 2023",
      text: "Podcast: Creating a better CX Community",
      par: "Starting a community doesn’t need to be complicated, but how do you get started?",
      category: [
        { id: 1, textTwo: "Podcasts", design: "bg-btn-barbr text-barbar" },
        {
          id: 2,
          textTwo: "Customer Success",
          design: "bg-[#F8F9FC] text-[#363F72]",
        },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },
    {
      id: 7,
      imge: imagT,
      title: "Drew Cano • 1 Jan 2023",
      text: "Our top 10 Javascript frameworks",
      par: "JavaScript frameworks make development easy with extensive features and functionalities.",
      category: [
        {
          id: 1,
          textTwo: "Software Development",
          design: "bg-[#F8F9FC] text-[#363F72]",
        },
        { id: 2, textTwo: "Tools", design: "bg-btn-barbr text-barbar" },
        { id: 3, textTwo: "SaaS", design: "bg-[#FFF1F3] text-[#C01048]" },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },
    {
      id: 8,
      imge: imagE,
      title: "Candice Wu • 1 Jan 2023",
      text: "What is Wireframing?",
      par: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      category: [
        { id: 1, textTwo: "Design", design: "bg-btn-barbr text-barbar" },
        { id: 2, textTwo: "Research", design: "bg-btn-sky-blue text-sky-850" },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },
    {
      id: 9,
      imge: imagFE,
      title: "Alec Whitten • 1 Jan 2023",
      text: "Bill Walsh leadership lessons",
      par: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      category: [
        { id: 1, textTwo: "Leadership", design: "bg-btn-barbr text-barbar" },
        {
          id: 2,
          textTwo: "Management",
          design: "bg-btn-sky-blue text-sky-850",
        },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },
    {
      id: 10,
      imge: imagF,
      title: "Olivia Rhye • 1 Jan 2023",
      text: "UX review presentations",
      par: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      category: [
        { id: 1, textTwo: "Design", design: "bg-btn-barbr text-barbar" },
        { id: 2, textTwo: "Research", design: "bg-btn-sky-blue text-sky-850" },
        { id: 3, textTwo: "Presentation", design: "bg-btn-rose text-btn-bink" },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },
    {
      id: 11,
      imge: imagFTH,
      title: "Olivia Rhye • 1 Jan 2023",
      text: "Grid system for better Design",
      par: " website, and can help to make the layout more visually appealing and easier to navigate.",
      category: [
        { id: 1, textTwo: "Design", design: "bg-btn-barbr text-barbar" },
        { id: 2, textTwo: "Interface", design: "bg-[#FFF6ED] text-[#C4320A]"  },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },

    {
      id: 12,
      imge: imagS,
      title: "Phoenix Baker • 1 Jan 2023",
      text: "Migrating to Linear 101",
      par: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get...",
      category: [
        { id: 1, textTwo: "Design", design: "bg-btn-barbr text-barbar" },
        { id: 2, textTwo: "Research", design: "bg-emerald-51 text-btn-green" },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },
    {
      id: 13,
      imge: imagTH,
      title: "Lana Steiner • 1 Jan 2023",
      text: "How collaboration makes us better designers",
      par: "The rise of RESTful APIs has been met by a new toolset for creating, testing, and manag...",
      category: [
        { id: 1, textTwo: "Design", design: "bg-emerald-51 text-btn-green" },
        { id: 2, textTwo: "Research", design: "bg-btn-rose text-btn-bink" },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },
    {
      id: 14,
      imge: imagN,
      title: "Natali Craig • 1 Jan 2023",
      text: "How collaboration makes us better designers",
      par: "Collaboration can make our teams stronger, and our individual designs better.",
      category: [
        { id: 1, textTwo: "Design", design: "bg-[#F8F9FC] text-[#363F72]" },
        { id: 2, textTwo: "Research", design: "bg-btn-rose text-btn-bink" },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },
    {
      id: 15,
      imge: imagSV,
      title: "Demi WIlkinson • 1 Jan 2023",
      text: "How collaboration makes us better designers",
      par: "Mental models are simple expressions of complex processes or relationships.",
      category: [
        { id: 1, textTwo: "Product", design: "bg-[#FFF6ED] text-[#C4320A]" },
        { id: 2, textTwo: "Research", design: "bg-btn-sky-blue text-sky-850" },
        {
          id: 3,
          textTwo: "Frameworks",
          design: "bg-[#F8F9FC] text-[#363F72]",
        },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },
    {
      id: 16,
      imge: imagEL,
      title: "Orlando Diggs • 1 Jan 2023",
      text: "Building your API Stack",
      par: "Starting a community doesn’t need to be complicated, but how do you get started?",
      category: [
        { id: 1, textTwo: "Podcasts", design: "bg-btn-sky-blue text-sky-850" },
        {
          id: 2,
          textTwo: "Customer Success",
          design: "bg-btn-rose text-btn-bink",
        },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },
    {
      id: 17,
      imge: imagF,
      title: "Olivia Rhye • 1 Jan 2023",
      text: "UX review presentations",
      par: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      category: [
        { id: 1, textTwo: "Design", design: "bg-btn-barbr text-barbar" },
        { id: 2, textTwo: "Research", design: "bg-btn-sky-blue text-sky-850" },
        { id: 3, textTwo: "Presentation", design: "bg-btn-rose text-btn-bink" },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },

    {
      id: 18,
      imge: imagS,
      title: "Phoenix Baker • 1 Jan 2023",
      text: "Migrating to Linear 101",
      par: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get...",
      category: [
        { id: 1, textTwo: "Design", design: "bg-sky-50 text-btn-blue" },
        { id: 2, textTwo: "Research", design: "bg-btn-rose text-btn-bink" },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },

    {
      id: 19,
      imge: imagTH,
      title: "Lana Steiner • 1 Jan 2023",
      text: "Building your API Stack",
      par: "The rise of RESTful APIs has been met by a new toolset for creating, testing, and manag...",
      category: [
        { id: 1, textTwo: "Design", design: "bg-emerald-51 text-btn-green" },
        { id: 2, textTwo: "Research", design: "bg-btn-rose text-btn-bink" },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },

    {
      id: 20,
      imge: imagFTH,
      title: "Olivia Rhye • 1 Jan 2023",
      text: "Grid system for better Design User Interface",
      par: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
      category: [
        { id: 1, textTwo: "Design", design: "bg-emerald-51 text-btn-green" },
        { id: 2, textTwo: "Interface", design: "bg-btn-rose text-btn-bink" },
      ],
      details: [
        {
          textTwo:
            "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
          titleTwo:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          imgTwo: imgTwo,
          titleThree:
            "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
          discription: [
            {
              id: 1,
              discriptionONe:
                "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
            },
            {
              id: 2,
              discriptionONe:
                "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
            },
            {
              id: 3,
              discriptionONe:
                "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
            },
            {
              id: 4,
              discriptionONe:
                "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
            },
          ],
          titleFour: "Breaking Down the Grid",
          discriptionFour:
            "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
          discriptionUl: [
            {
              id: 1,
              titleUl: "Columns:",
              discriptionFourUl:
                "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
            },
            {
              id: 2,
              titleUl: "Gutters:",
              discriptionFourUl:
                "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
            },
          ],
          imgThree: ImageThree,
          titleFourT:
            "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
          titleFive: "Examples of Grids in Use",
          cardOne: [
            {
              id: 1,
              titleSix: "Example 1: Hierarchical Grid",
              textThree:
                "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
              imgFour: ImageFour,
              textFour:
                "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 2,
              titleSix: "Example 2: Column Grid",
              textThree:
                "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
              imgFour: ImageFive,
              textFour:
                "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 3,
              titleSix: "Example 3: Modular Grid",
              textThree:
                "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
              imgFour: ImageSix,
              textFour:
                "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 4,
              titleSix: "Example 4: Breaking the Grid",
              textThree:
                "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
              imgFour: ImageSeven,
              textFour:
                "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
            },
            {
              id: 5,
              titleSix: "Benefits of the Grid",
              textThree:
                "Using a grid benefits both end users and the designers alike:Designers can quickly put together well-aligned interfaces.Users can easily scan predictable grid-based interfaces.A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
              imgFour: ImageEight,
              textFour:
                "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).)",
            },
          ],
          textFive:
            "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
          titleSeven: "Choosing and Setting Up Your Grid",
          textSeven:
            "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
          cardThree: [
            {
              id: 1,
              titleEight: "Choose the right grid for your needs.",
              textEight:
                " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
            },
            {
              id: 2,
              titleEight: "Spend time setting up your grid.",
              textEight:
                "Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
            },
          ],
          imgNine: imgNine,
          pargraph:
            "Easily set the number of columns, the gutter size, and margin size in Figma.",
          pargraphSpan: "Always place content within columns, not gutters.",
          pargraphTwo:
            "The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
          imgTen: imgTen,
          pargraphThree:
            "Content or elements should be placed within and across columns, not gutters.",
          pargraphFourSpan: "Consider using an 8px grid system.",
          pargraphFour:
            "For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
          titleNine: "Conclusion",
          pargraphFive:
            "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
        },
      ],
    },
  ],
  selectedBlogs: [],
  customsBlog: [],
  idBost:1,
  suggestionsArticle:[],
  currentArticles: [],
  articlesPerPage: 6,
  totalArticles: 20,
};

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    showSomeBlog: (state, action) => {
      const { count, removeKey, isFirst } = action.payload;
      const selectedBlogs = state.blogs.map(blog => {
        const blogCopy = { ...blog };
        delete blogCopy[removeKey];
        return blogCopy;
      });

      state.selectedBlogs = isFirst  
        ? selectedBlogs.slice(0, count) 
        : selectedBlogs.slice(-count);  
    },
    fetchArticlesByPage: (state, action) => {
      const page = action.payload;
      const endIndex = page * state.articlesPerPage;
      const startIndex = endIndex - state.articlesPerPage;
      state.currentArticles = state.blogs
     .map(({ details, ...rest }) => rest)
     .slice(startIndex, endIndex);

    },
    show:(state, action) => {
      const id = action.payload;
      state.customsBlog = state.blogs.filter((blogItem) => blogItem.id == id);
      state.idBost = state.customsBlog[0].id
    },
    showSuggestions:(state , action) =>{
      const id = action.payload;
      const existingBlog = state.blogs.filter((item) => item.id !== id);
      state.suggestionsArticle = existingBlog.map(({ details, ...rest }) => rest)
      .slice(-9)
    },
    
  },
});


export const { showSomeBlog,fetchArticlesByPage, show ,showSuggestions} =
  blogSlice.actions;

export default blogSlice.reducer;
