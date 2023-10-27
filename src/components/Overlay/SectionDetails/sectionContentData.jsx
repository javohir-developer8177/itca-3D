// Components
import TeamCarousel from "../TeamCarousel";

// Sections content data
const sectionsContentData = [
  {
    key: "about",
    title: "About Us",
    content: (
      <p>
        IT City Academy - Zamonaviy kasblar akademiyasi! Bizning maqsad
        viloyatlarda ham yoshlarni zamonaviy kasblarga qiziqtirish, ularni
        ma’lum bir soha mutaxassisi qilib tarbiyalash orqali ularning qadrini
        oshirish. 📱✨🎉
      </p>
    ),
  },
  { key: "team", title: "Our team", content: <TeamCarousel /> },
  {
    key: "credits",
    title: "Contacts",
    content: (
      <div>
        <div className="contacts-wrapper">
          <ul className="credits">
            <li>
              <a target="_blank" href="tel:+998993393300">
                <i class="fa-solid fa-phone"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://t.me/itcity_academy">
                <i class="fa-brands fa-telegram"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.facebook.com/ITCityAcademyy">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/itcity_academy/"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://linkedin.com">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12431.587784847248!2d65.7742895!3d38.8348209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea9ac56d47761%3A0x9333310b977c064!2sIT%20Techno%20Park!5e0!3m2!1sru!2s!4v1688812426969!5m2!1sru!2s"
            frameborder="0"
          ></iframe>
        </div>
        <h2 className="heading">Sizni "IT CITY ACADEMY" da kutib qolamiz 😉</h2>
      </div>
    ),
  },
];

export default sectionsContentData;
