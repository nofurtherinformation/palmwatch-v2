import queryClient from "@/utils/getMillData";

export const MENU_ITEMS: Array<{
  label: keyof ReturnType<typeof queryClient.getSearchList>;
  icon: React.ReactNode;
  path: string;
  description?: string;
}> = [
  {
    label: "Brands",
    description: "The largest end users of palm oil and the estimated deforestation impact and risk of their supply chains",
    icon: (
      <path
        d="m61.766 6.5156c-2.1094-0.035156-4.0195 0.8125-5.6758 1.6484-2.2148 1.1172-4.1602 2.1992-6.1484 2.2031-1.9883 0-3.9375-1.0703-6.1523-2.1797-2.2148-1.1094-4.8711-2.2461-7.8516-1.2734-2.9805 0.97266-4.4609 3.457-5.5938 5.6602-1.1367 2.2031-2.0742 4.2227-3.6797 5.3945-1.6055 1.1719-3.8203 1.4453-6.2617 1.8516-2.4453 0.40625-5.2617 1.0508-7.1016 3.5938-1.8398 2.5391-1.5703 5.4141-1.1953 7.8633 0.37891 2.4492 0.80078 4.6367 0.19141 6.5273-0.61328 1.8906-2.2344 3.418-3.9766 5.1797-1.7383 1.7656-3.6367 3.9414-3.6328 7.0781s1.9102 5.3086 3.6562 7.0664c1.7461 1.7617 3.3711 3.2773 3.9883 5.168 0.61719 1.8906 0.19531 4.0781-0.17578 6.5312-0.37109 2.4492-0.625 5.3242 1.2227 7.8633 1.8477 2.5352 4.6641 3.168 7.1094 3.5664 2.4453 0.39844 4.6562 0.67188 6.2656 1.8359 1.6094 1.168 2.5586 3.1836 3.6992 5.3828 1.1406 2.1992 2.6211 4.6797 5.6055 5.6445s5.6367-0.17969 7.8477-1.293c2.2148-1.1172 4.1602-2.1992 6.1445-2.1992 1.9883-0.003906 3.9414 1.0742 6.1602 2.1836 2.2148 1.1094 4.8711 2.2383 7.8516 1.2656s4.4531-3.4531 5.5859-5.6562c1.1367-2.2031 2.0781-4.2227 3.6875-5.3945 1.6055-1.1719 3.8164-1.4453 6.2578-1.8516 2.4453-0.40625 5.2578-1.0508 7.0977-3.5938 1.8398-2.5391 1.5742-5.4141 1.1953-7.8633-0.375-2.4492-0.80078-4.6367-0.1875-6.5273 0.61719-1.8906 2.2383-3.418 3.9805-5.1836 1.7383-1.7656 3.6367-3.9375 3.6328-7.0742-0.003906-3.1367-1.9102-5.3086-3.6523-7.0703-1.7461-1.7578-3.375-3.2773-3.9922-5.1641-0.61719-1.8906-0.19531-4.082 0.17188-6.5312 0.37109-2.4531 0.62891-5.3242-1.2188-7.8594s-4.6641-3.1719-7.1094-3.5703c-2.4453-0.39844-4.6562-0.66797-6.2656-1.8359-1.6094-1.1641-2.5547-3.1836-3.6953-5.3867-1.1406-2.1992-2.6289-4.6719-5.6133-5.6367-0.74609-0.24219-1.4688-0.35156-2.1719-0.36328zm-11.77 14.707c9.8359 0 18.996 5.0312 24.281 13.324 0.46094 0.72656 0.25 1.6914-0.47266 2.1562-0.72656 0.46094-1.6914 0.25-2.1562-0.47266-4.7109-7.3984-12.879-11.883-21.652-11.883-8.7695 0-16.926 4.4766-21.637 11.871-0.22266 0.35156-0.57422 0.59766-0.97656 0.69141-0.40625 0.089844-0.83203 0.015625-1.1797-0.20703-0.72656-0.46484-0.9375-1.4297-0.47266-2.1562 5.2812-8.2891 14.434-13.324 24.266-13.324zm0 11.262c0.60938 0 1.1641 0.35547 1.418 0.91406l4.0742 8.8633 9.6484 1.1523-0.003907-0.003906c0.60156 0.074219 1.1094 0.49219 1.2969 1.0703s0.023437 1.2148-0.42188 1.6289l-7.1289 6.6328 1.8984 9.5781c0.11719 0.60156-0.12109 1.2148-0.61328 1.5742-0.49219 0.35938-1.1484 0.39844-1.6797 0.10156l-8.4805-4.7695-8.4805 4.7734c-0.53125 0.30078-1.1875 0.25781-1.6797-0.10156-0.49219-0.35938-0.73047-0.97266-0.60938-1.5742l1.8945-9.5781-7.1367-6.625c-0.44922-0.41406-0.61719-1.0547-0.42969-1.6367 0.1875-0.57812 0.69531-1 1.3008-1.0703l9.6484-1.1523 4.0742-8.8633c0.25-0.55469 0.80469-0.91016 1.4102-0.91406zm0 5.3086-3.0195 6.5781 0.003907-0.003906c-0.22656 0.49609-0.69531 0.83984-1.2344 0.90625l-7.1523 0.85156 5.2891 4.9219c0.39453 0.36719 0.57422 0.91797 0.46875 1.4531l-1.4023 7.1094 6.2891-3.543c0.47656-0.26953 1.0547-0.26953 1.5273-0.003906l6.2891 3.5352-1.4062-7.1055c-0.10547-0.53125 0.074218-1.082 0.46875-1.4531l5.293-4.9141-7.1562-0.85547c-0.53906-0.0625-1.0078-0.40625-1.2344-0.90234zm-23.023 25.266c0.55859-0.027344 1.0859 0.24609 1.3867 0.71484 4.7109 7.3945 12.867 11.867 21.637 11.867 8.7695 0 16.93-4.4766 21.641-11.867 0.22266-0.34766 0.57812-0.58984 0.98047-0.67969 0.40234-0.089844 0.82812-0.015625 1.1758 0.20703 0.35156 0.22266 0.59766 0.57422 0.69141 0.98047 0.089844 0.40234 0.015625 0.82812-0.20703 1.1797-5.2852 8.2891-14.445 13.309-24.281 13.309-9.832 0-18.984-5.0195-24.266-13.309-0.46484-0.72656-0.25391-1.6953 0.47266-2.1602 0.23047-0.14844 0.49609-0.23047 0.76953-0.24219z"
        fillRule="evenodd"
      />
    ),
    path: "/brands",
    
  },
  {
    label: "Mills",
    icon: (
      <g>
        <path d="m63.996 50.305c0-4.1562-4.2969-6.9219-8.0781-5.2031l-17.141 7.793c-2.1758 0.98828-4.6758-0.45312-4.9102-2.8359l-4.1562-34.344h-17.145l-7.9727 73.742c-0.3125 3.3438 2.3125 6.2578 5.6875 6.2578h79.43c3.1445 0 5.7148-2.5703 5.7148-5.7148v-39.695c0-4.1562-4.293-6.9219-8.0781-5.2031l-18.426 8.375c-2.3047 1.0469-4.9258-0.64062-4.9258-3.1719zm-15.715 28.039c-3.8867 0-7.0273-3.1445-7.0273-7.0273 0-3.8789 3.1445-7.0273 7.0273-7.0273 3.8789 0 7.0273 3.1445 7.0273 7.0273 0.003906 3.8789-3.1406 7.0273-7.0273 7.0273zm31.316 0c-3.8867 0-7.0273-3.1445-7.0273-7.0273 0-3.8789 3.1445-7.0273 7.0273-7.0273 3.8789 0 7.0273 3.1445 7.0273 7.0273 0 3.8789-3.1406 7.0273-7.0273 7.0273z" />
        <path d="m9.7109 10h22.855c1.5781 0 2.8555-1.2812 2.8555-2.8555 0-1.5781-1.2812-2.8555-2.8555-2.8555h-22.855c-1.5781 0-2.8555 1.2812-2.8555 2.8555s1.2773 2.8555 2.8555 2.8555z" />
      </g>
    ),
    path: "/mills",
    description: "The local facilities that crush fruit to produce crude palm oil. Search below for specific mills and to learn more about their production and deforestation impact."
  },
  {
    label: "Mill Owners",
    icon: (
      <path d="m99.992 48.664c-0.015626-0.50781-0.16797-1.0117-0.45313-1.4375l-15.395-23.098c-0.50781-0.75391-1.3633-1.2109-2.2734-1.2109h-20.809c-1.5078 0-2.7305 1.2227-2.7305 2.7344v44.535c0 1.5039 1.2227 2.7305 2.7344 2.7305h5.5977c0 6.9023 5.5977 12.5 12.5 12.5 6.9023 0 12.5-5.5977 12.5-12.5h5.5977c1.5078 0 2.7344-1.2227 2.7344-2.7344l0.003906-21.441c0-0.027344-0.007812-0.054688-0.007812-0.078126zm-29.16-0.74609v-16.668h10.543l11.113 16.668zm8.332 31.25c-3.4453 0-6.25-2.8047-6.25-6.25 0-3.4453 2.8047-6.25 6.25-6.25 3.4453 0 6.25 2.8047 6.25 6.25 0 3.4453-2.8047 6.25-6.25 6.25zm-28.629-64.586h-46.906c-2.0039 0-3.6289 1.625-3.6289 3.6289v51.074c0 2.0039 1.625 3.6289 3.6289 3.6289h8.8711c0 6.9023 5.5977 12.5 12.5 12.5s12.5-5.5977 12.5-12.5h13.039c2.0039 0 3.6289-1.625 3.6289-3.6289l-0.003907-51.074c0-2.0039-1.6211-3.6289-3.6289-3.6289zm-25.535 64.586c-3.4453 0-6.25-2.8047-6.25-6.25 0-3.4453 2.8047-6.25 6.25-6.25s6.25 2.8047 6.25 6.25c0 3.4453-2.8047 6.25-6.25 6.25z" />
    ),
    path: "/owners",
    description: "The companies that directly control crushing mills that supply palm oil to consumer brands. Search below to learn more about their operations and the brands they supply."
  },
  {
    label: "Mill Groups",
    icon: (
      <path
        d="m100 88.75v-2.5h-7.5v-75h-55v32.5h-30v42.5h-7.5v2.5zm-57.5-60h7.5v7.5h-7.5zm12.5 0h7.5v7.5h-7.5zm12.5 0h7.5v7.5h-7.5zm12.5 0h7.5v7.5h-7.5zm-37.5 12.5h7.5v7.5h-7.5zm12.5 0h7.5v7.5h-7.5zm12.5 0h7.5v7.5h-7.5zm12.5 0h7.5v7.5h-7.5zm-37.5 12.5h7.5v7.5h-7.5zm12.5 0h7.5v7.5h-7.5zm12.5 0h7.5v7.5h-7.5zm12.5 0h7.5v7.5h-7.5zm-37.5 12.5h7.5v7.5h-7.5zm37.5 0h7.5v7.5h-7.5zm-22.5 2.5h15v17.5h-15zm-45-20h7.5v7.5h-7.5zm12.5 0h7.5v7.5h-7.5zm-12.5 12.5h7.5v7.5h-7.5zm12.5 0h7.5v7.5h-7.5zm-12.5 12.5h7.5v7.5h-7.5zm12.5 0h7.5v7.5h-7.5zm17.5-57.5h7.5v7.5h-7.5zm12.5 0h7.5v7.5h-7.5zm12.5 0h7.5v7.5h-7.5zm12.5 0h7.5v7.5h-7.5z"
        fillRule="evenodd"
      />
    ),
    path: "/groups",
    description: "The parent companies that control crushing mills that supply palm oil to consumer brands. Search below to learn more about the mills they control and the brands they supply."
  },
  {
    label: "Countries",
    icon: (
      <g fillRule="evenodd">
        <path d="m50 5.207c-24.723 0-44.793 20.07-44.793 44.793s20.07 44.793 44.793 44.793 44.793-20.07 44.793-44.793-20.07-44.793-44.793-44.793zm0 6.25c21.27 0 38.543 17.27 38.543 38.543 0 21.27-17.27 38.543-38.543 38.543-21.27 0-38.543-17.27-38.543-38.543 0-21.27 17.27-38.543 38.543-38.543z" />
        <path d="m76.98 19.18c-6.9531 6.8203-16.48 11.027-26.98 11.027s-20.023-4.207-26.98-11.027c-1.2305-1.207-3.2109-1.1875-4.418 0.046874-1.207 1.2305-1.1914 3.207 0.042969 4.418 8.082 7.9258 19.148 12.816 31.355 12.816 12.203 0 23.27-4.8906 31.355-12.816 1.2344-1.207 1.25-3.1875 0.042969-4.418-1.2031-1.2344-3.1875-1.2539-4.418-0.046874z" />
        <path d="m23.02 80.82c6.9531-6.8203 16.48-11.027 26.98-11.027s20.023 4.207 26.98 11.027c1.2305 1.207 3.2109 1.1875 4.418-0.046874 1.207-1.2305 1.1914-3.207-0.042969-4.418-8.082-7.9258-19.148-12.816-31.355-12.816-12.203 0-23.27 4.8906-31.355 12.816-1.2344 1.207-1.25 3.1875-0.042969 4.418 1.2031 1.2344 3.1875 1.2539 4.418 0.046874z" />
        <path d="m50 5.207c-4.5977 0-9.1367 3.3594-12.582 9.6719-4.3242 7.9258-7.207 20.703-7.207 35.121s2.8828 27.195 7.207 35.121c3.4453 6.3125 7.9883 9.6719 12.582 9.6719 4.5977 0 9.1367-3.3594 12.582-9.6719 4.3242-7.9258 7.207-20.703 7.207-35.121s-2.8828-27.195-7.207-35.121c-3.4453-6.3125-7.9883-9.6719-12.582-9.6719zm0 6.25c1.1484 0 2.2305 0.53906 3.2656 1.3984 1.3945 1.168 2.668 2.8828 3.8281 5.0156 3.9531 7.2422 6.4453 18.945 6.4453 32.125 0 13.18-2.4922 24.883-6.4453 32.125-1.1641 2.1328-2.4336 3.8516-3.8281 5.0156-1.0391 0.86328-2.1172 1.3984-3.2656 1.3984s-2.2305-0.53906-3.2656-1.3984c-1.3945-1.168-2.668-2.8828-3.8281-5.0156-3.9531-7.2422-6.4453-18.945-6.4453-32.125 0-13.18 2.4922-24.883 6.4453-32.125 1.1641-2.1328 2.4336-3.8516 3.8281-5.0156 1.0391-0.86328 2.1172-1.3984 3.2656-1.3984z" />
        <path d="m91.668 46.875h-83.332c-1.7266 0-3.125 1.3984-3.125 3.125s1.3984 3.125 3.125 3.125h83.332c1.7266 0 3.125-1.3984 3.125-3.125s-1.3984-3.125-3.125-3.125z" />
      </g>
    ),
    path: "/countries",
  },
];