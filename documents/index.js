module.exports = (details) => {
  return `
<!doctype html>
<html>
  <head>
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <meta charset="utf-8">
    <title>PDF Result Template</title>
    <style>
    body{
        background-color: #F2F6FF;

    }
    .page-container{
        width: 100%;
        height: 400px;
        margin: 80px auto;
        align-items: center;
    }
    .share-container{
        position: relative;
        max-width: 800px;
        margin: auto;
        border-radius: 12px;
        background-color: #fff;
        padding: 120px 60px 60px 60px;
    }
    .content{
        margin-top: -40px;
        align-items: center;
    }
    .text{
        max-width: 70%;
        font-weight: 600;
        font-family: 'Roboto', sans-serif;
        font-size: 30px;
        line-height: 1.4;
        color: #2a1a46;
    }
    .image-container{
        width: 200px;
        height: 100%;
        float: right;
        margin-right: -230px;
        margin-top: -90px;
    }
    .thanks-from{
        align-items: center;
        margin-top: 50px;
    }
    .thanks-from-name{
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 18px;
        color: #303AB2;
        line-height: 130.19%;
        margin-top: -44px;
        margin-left: 50px;
    }
    .thanks-from img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
</style>
  </head>
  <body>
    <div class="page-container" v-if="details">
     <div class="share-container">
        <div class="content" >
          <div class="text">
            <span> ${details.thanksTo}, </span>
            <span  
              >${details.reasons[0].message.toLowerCase()} teşekkürler.</span
            >
            <span> ${details?.reasons[1]?.message[0].toUpperCase() +
    details?.reasons[1]?.message.substring(1).toLowerCase()}.</span>
        <div class="image-container">
            <img alt="Image" src= '${details.image}' />
          </div>
            <div class="thanks-from">
              <img
                src='${details.thanksFromPhotoURL}'
                alt="profile"
              />
              <div class="thanks-from-name">${details.thanksFrom}</div>
            </div>
          </div>
          
        </div>
     </div>
    </div>
`
}