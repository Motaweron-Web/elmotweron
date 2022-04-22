<template>
  <section class="ContactUs">
    <div class="container">
      <div class="row">
        <div class="col-md-5 p-2">
          <div class="title justify-content-start">
            <h1>تواصل معنا</h1>
          </div>

          <div class="contact">
            <ul>
              <li>
                <div class="icon me-2">
                  <i class="fa-duotone fa-map-location-dot"></i>
                </div>
                <div class="info">
                  <h6>العنوان :</h6>
                  <a href="#!">مصر - المنوفيه - شبين الكوم</a>
                </div>
              </li>
              <li>
                <div class="icon me-2">
                  <i class="fa-duotone fa-phone"></i>
                </div>
                <div class="info">
                  <h6>الهاتف :</h6>
                  <a href="tel:0123456789"> 0123456789 </a>
                </div>
              </li>
              <li>
                <div class="icon me-2">
                  <i class="fa-duotone fa-mailbox"></i>
                </div>
                <div class="info">
                  <h6>البريد الالكتروني :</h6>
                  <a href="mailto:mail@mail.com"> mail@mail.com </a>
                </div>
              </li>
            </ul>
            <h3 class="mt-5"> مواقع التواصل </h3>
            <div class="social">
              <a href="#!" target="_Blank" class="facebook">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#!" target="_Blank" class="linkedin">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#!" target="_Blank" class="whatsapp">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-7 p-2">
          <form action=""></form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ContactUs {
  background-color: #f2f3f8;
  padding: 70px 0 70px;

  .contact {
    ul {
      margin: 0;
      padding: 20px 0;
      list-style: none;
      li {
        margin-bottom: 25px;
        display: flex;
        align-items: center;
        &:last-child {
          margin-bottom: 0;
        }
        .icon {
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #666;
          border-radius: 100px;
          transition: all 0.3s ease-in-out;
          i {
            font-size: 20px;
            transition: all 0.3s ease-in-out;
          }
        }
        .info {
          h6 {
            margin-bottom: 10px;
            color: #777;
          }
          a {
            font-size: larger;
            display: block;
            transition: all 0.3s ease-in-out;
            color: #000;
          }
        }
        &:hover {
          .icon {
            border: 1px solid #fff;
            background: #fff;
            box-shadow: 0px 2px 10px #00000030;

            i {
              font-size: 20px;
              color: #ed2729;
            }
          }
          .info {
            a {
              color: #ed2729;
            }
          }
        }
      }
    }
    .social {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      padding: 20px 0;
      a {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100px;
        transition: all 0.3s ease-in-out;
        margin: 5px;
        box-shadow: 0px 2px 10px #00000030;

        i {
          font-size: 20px;
          color: #fff;
          transition: all 0.3s ease-in-out;
        }

        &.linkedin {
          background: #0072b1;
        }
        &.facebook {
          background: #3b5998;
        }
        &.whatsapp {
          background: #25d366;
        }

        &:hover {
          background: #ed2729;

          i {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>