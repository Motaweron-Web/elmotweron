<template>
  <div class="AboutHome">
    <div class="container">
      <div class="title">
        <h1>من نحن</h1>
      </div>
      <h6 class="text-center">
        شركة المطورون احدى الشركات الرائدة فى السوق المصرى والعربى فى مجال
        تكنولوجيا المعلومات
      </h6>

      <div class="row justify-content-center align-items-center pt-5">
         <div class="col-md-6 order-md-2 p-2">
          <p class="info">
            انشئت فى مطلع عام 2010 م على يد نخبة من المتخصصين لتبدء نشاطها
            وتنافس فى الريادة على مستوى القطر المصرى و العربى، - حققت العديد من
            الإنجازات فى تلك الفترة القصيرة واستحوذت على ثقة العملاء وأصبح لدينا
            عملاء نعتز بهم من مختلف الدول العربية - قمنا بإنتاج العديد من الحلول
            البرمجية المناسبة لجميع الأعمال والتى راعينا في تطويرها عدد من
            المعايير التى تضمن تحقيق أقصى إنجاز وأستفادة وحماية لأعمال عملائنا
            بشكل إحترافى -الوصول الى صدارة الشركات العربية فى تقديم حلول
            البرمجيات والمنافسة عالميا - تقديم مجموعة من الحلول البرمجية
            والخدمات للمؤسسات والأفراد مبنية على أسس الإبتكار والإبداع لننافس
            بها العلامات التجارية الأخرى. - هدفنا تمكين ودعم قطاعات الأعمال
            والتعليم والصحة فى الشرق الأوسط بحلول برمجية لادارة الموارد
            المتكاملة
          </p>

          <router-link :to="{ name: 'About' }" class="customBtn wow fadeInUp">
            <p>تعرف أكثر <i class="fa-duotone fa-left-long ms-2"></i></p>
          </router-link>
        </div>
        <div class="col-md-6 order-md-1 p-0">
          <img :src="mainImg" class="mainImg" />
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainImg: require(`@/assets/img/hello.png`),
    };
  },
};
</script>

<style lang="scss" scoped>
.AboutHome {
  padding: 70px 0 0;
  h6{
    margin-bottom: 30px;
  }
  .info {
    // text-align: center;
    color: #666;
    line-height: 30px;
    margin-bottom: 20px;
  }
  .mainImg {
    width: 100%;
    height: 400px;
    object-fit: contain;
    //   filter: drop-shadow(20px 20px 30px #ED272950);
    //   overflow: hidden;
  }
}
</style>