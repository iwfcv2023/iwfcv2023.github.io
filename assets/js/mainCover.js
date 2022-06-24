// legacy browser support
// if using copyright asset permitteed, replace localPath null value to actually local path

var coverImages = [
  {
    localPath: null,
    remotePath: 'https://www.utophotel.com/UtopUnity_common/images/homepage/company/marina_01.jpg'
  },
  {
    localPath: null,
    remotePath: 'https://www.utophotel.com/UtopUnity_common/images/homepage/company/marina_03.jpg'
  },
  {
    localPath: null,
    remotePath: 'https://www.utophotel.com/UtopUnity_common/images/homepage/company/marina_04.jpg'
  },
  {
    localPath: null,
    remotePath: 'https://www.utophotel.com/UtopUnity_common/images/homepage/company/marina_05.jpg'
  },
  {
    localPath: null,
    remotePath: 'https://www.hotelscombined.co.kr/himg/97/2f/ad/expediav2-5269182-47ac79-571756.jpg'
  }
];

function getRandomCover () {
  var idx = Math.floor(Math.random() * coverImages.length);
  return coverImages[idx]['localPath'] === null ? [false, coverImages[idx]['remotePath']] : [true, coverImages[idx]['localPath']];
}