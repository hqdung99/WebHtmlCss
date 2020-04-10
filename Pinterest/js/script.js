$(function() {
    var body = $("body");
    var container = document.createElement("div");
    container.className += "container";
    body.prepend(container);
    
    var objects = [
      {
        src: "https://i.pinimg.com/564x/d0/ee/7f/d0ee7fd3988fb76a94b4361221e1490e.jpg",
        title: "Albert Einstein",
        infor: "Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March 1879 – 18 April 1955) was a German-born theoretical physicist[5] who developed the theory1"
      },
      {
        src: "https://veeroesquotes.com/wp-content/uploads/2018/11/quote-62.jpg",
        title: "Albert Einstein",
        infor: "Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March 1879 – 18 April 1955) was a German-born theoretical physicist[5] who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics).[3][6]:274"
      },
      {
        src: "https://thebestyoumagazine.co/wp-content/uploads/Einstein-Frame-1036x583.jpg",
        title: "Albert Einstein",
        infor: "Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March 1879 – 18 April 1955) was a German-born theoretical physicist[5] who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics).[3][6]:274 Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March 1879 – 18 April 1955) was a German-born theoretical physicist[5] who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics).[3][6]:274"
      },
      {
              src: "https://i.ytimg.com/vi/qZQn0_PvQIU/maxresdefault.jpg",
              title: "Albert Einstein",
              infor: "Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March 1879 – 18 April 1955) was a German-born theoretical physicist[5] who developed the theory"
      },
      {
        src:"https://veeroesquotes.com/wp-content/uploads/2018/11/quote-62.jpg",
        title: "Albert Einstein",      
        infor: "Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March 1879 – 18 April 1955) was a German-born theoretical physicist[5] who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics).[3][6]:274"
      },
      {
        src: "https://i.pinimg.com/originals/28/97/d9/2897d9847ee270e7e667509dde1f577e.jpg",
        title: "Albert Einstein",
        infor: "Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March 1879 – 18 April 1955) was a German-born theoretical physicist[5] who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics).[3][6]:274 14 March 1879 – 18 April 1955) was a German-born theoretical physicist[5] who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics).[3][6]:274"
      },
      {
        src: "https://www.geckoandfly.com/wp-content/uploads/2015/05/albert-einstein-quotes-03.jpg",
        title: "Albert Einstein",
        infor: "Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March 1879 – 18 April 1955) was a German-born theoretical physicist[5] who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics).[3][6]:274"     
      },
      {
              src: "https://i.pinimg.com/564x/82/6d/9c/826d9ce656abb6286e50c32ad3144eb2.jpg",
        title: "Albert Einstein",
        infor: "Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March 1879 – 18 April 1955) was a German-born theoretical physicist[5] who developed the theory"
      },
          {
              src: "https://i.pinimg.com/564x/3f/e8/ce/3fe8ce9c69b60bf1634622acaf9db624.jpg",
        title: "Albert Einstein",
        infor: "Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten);14 March 1879 – 18 April 1955) was a German-born theoretical physicist[5] who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics).[3][6]:274"
      },
      {
        src: "https://i.pinimg.com/564x/4c/e1/9e/4ce19eebde6e66d63731e4bb7c7e538f.jpg",
        title: "Albert Einstein",
        infor: "Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten);"
          },
      {
        src: "https://i.pinimg.com/564x/98/b2/bf/98b2bf0c9b83ef85290ee52ab8e16663.jpg",
        title: "Albert Einstein",
        infor: "Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March 1879 – 18 April 1955) was a German-born theoretical physicist[5] who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics).[3][6]:274 of relativity, one of the two pillars of modern physics (alongside quantum mechanics).[3][6]:274"
      },
      {
        src: "https://i.pinimg.com/564x/64/bf/dc/64bfdc05d9d59cf7790488da770e716c.jpg",
        title: "Albert Einstein",
              infor: "Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March 1879 – 18 April 1955) was a German-born theoretical physicist[5] who developed the theory"
      }
    ];
    
    for (var i = 0; i < objects.length; i++) {
      var item = document.createElement("div");
      item.className += "item";
      
      var img = document.createElement("img");
      img.setAttribute("src", objects[i].src);
      var h2 = document.createElement("h2");
      h2.textContent = objects[i].title;
      var p = document.createElement("p");
      p.textContent = objects[i].infor;
        
      item.prepend(p);
      item.prepend(h2);
      item.prepend(img);
      
      container.append(item);
    }
  });