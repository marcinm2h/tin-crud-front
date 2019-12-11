import React from "react";

export const Home = () => {
  return (
    <div class="page-container">
      <header class="section-container section-container--header">
        <div class="logo">
          <a href="index.html">
            <h1>
              <img
                src="https://via.placeholder.com/125x45/253341"
                alt="Logo strony"
              />
            </h1>
          </a>
        </div>
        <nav clas="menu">
          <ul class="menu__list">
            <li class="menu__item">
              <a href="index.html" title="Strona główna">
                <i class="material-icons">home</i>
              </a>
            </li>
            <li class="menu__item">
              <a href="groups.html" title="Grupy">
                <i class="material-icons">people</i>
              </a>
            </li>
            <li class="menu__item">
              <a href="post-create.html" title="Dodaj post">
                <i class="material-icons">add_circle_outline</i>
              </a>
            </li>
            <li class="menu__item">
              <a href="login.html" title="Konto">
                <i class="material-icons">account_circle</i>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section class="section-container section-container--groups">
        <div class="groups">
          <ul class="groups__list">
            <li class="groups__item">
              <a href="group-programming.html">#PROGRAMMING</a>
            </li>
            <li class="groups__item">
              <a href="group-programming.html">#GAMING</a>
            </li>
            <li class="groups__item">
              <a href="group-programming.html">#GYM</a>
            </li>
            <li class="groups__item">
              <a href="group-programming.html">#POLAND</a>
            </li>
            <li class="groups__item">
              <a href="group-programming.html">#BEER</a>
            </li>
            <li class="groups__item">
              <a href="group-programming.html">#JAVA</a>
            </li>
            <li class="groups__item">
              <a href="group-programming.html">#UX</a>
            </li>
            <li class="groups__item">
              <a href="group-programming.html">#DESIGN</a>
            </li>
            <li class="groups__item">
              <a href="group-programming.html">#IOS</a>
            </li>
            <li class="groups__item">
              <a href="group-programming.html">#APPLE</a>
            </li>
            <li class="groups__item">
              <a href="group-programming.html">#LINUX</a>
            </li>
          </ul>
        </div>
      </section>

      <section class="section-container section-container--title">
        <h2 class="section-container__title section-container__title--main">
          Strona główna
        </h2>
        <div class="page-action">
          <a href="group-create.html">
            <i class="material-icons">add_circle_outline</i>
            Utwórz grupę
          </a>
        </div>
      </section>

      <section class="section-container section-container--content">
        <div class="post">
          <div class="votes post__votes">
            <div class="votes__arrow">
              <a href="#">
                <i class="material-icons">keyboard_arrow_up</i>
              </a>
            </div>
            <div class="votes__arrow">
              <a href="#">
                <i class="material-icons">keyboard_arrow_down</i>
              </a>
            </div>
          </div>
          <div class="post__thumb">
            <a href="post.html">
              <img
                src="https://via.placeholder.com/130x70/253341"
                alt="Logo strony"
              />
            </a>
          </div>
          <div class="post__body post-body">
            <p class="post-body__excerpt">
              <a href="post.html">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </a>
            </p>
            <div class="post-body__action-bar action-bar">
              <div class="action-bar__score-comments">
                <a href="post.html">+123</a> |{" "}
                <a href="post.html">32 komentarze</a>
              </div>
              <div class="admin action-bar__modify">
                <a class="button" href="post-edit.html">
                  edit
                </a>
                <a class="button" href="post-remove-question.html">
                  remove
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="post">
          <div class="votes post__votes">
            <div class="votes__arrow">
              <a href="#">
                <i class="material-icons">keyboard_arrow_up</i>
              </a>
            </div>
            <div class="votes__arrow">
              <a href="#">
                <i class="material-icons">keyboard_arrow_down</i>
              </a>
            </div>
          </div>
          <div class="post__thumb">
            <a href="post.html">
              <img
                src="https://via.placeholder.com/130x70/253341"
                alt="Logo strony"
              />
            </a>
          </div>
          <div class="post__body post-body">
            <p class="post-body__excerpt">
              <a href="post.html">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </a>
            </p>
            <div class="post-body__action-bar action-bar">
              <div class="action-bar__score-comments">
                <a href="post.html">+123</a> |{" "}
                <a href="post.html">32 komentarze</a>
              </div>
              <div class="admin action-bar__modify">
                <a class="button" href="post-edit.html">
                  edit
                </a>
                <a class="button" href="post-remove-question.html">
                  remove
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="post">
          <div class="votes post__votes">
            <div class="votes__arrow">
              <a href="#">
                <i class="material-icons">keyboard_arrow_up</i>
              </a>
            </div>
            <div class="votes__arrow">
              <a href="#">
                <i class="material-icons">keyboard_arrow_down</i>
              </a>
            </div>
          </div>
          <div class="post__thumb">
            <a href="post.html">
              <img
                src="https://via.placeholder.com/130x70/253341"
                alt="Logo strony"
              />
            </a>
          </div>
          <div class="post__body post-body">
            <p class="post-body__excerpt">
              <a href="post.html">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </a>
            </p>
            <div class="post-body__action-bar action-bar">
              <div class="action-bar__score-comments">
                <a href="post.html">+123</a> |{" "}
                <a href="post.html">32 komentarze</a>
              </div>
              <div class="admin action-bar__modify">
                <a class="button" href="post-edit.html">
                  edit
                </a>
                <a class="button" href="post-remove-question.html">
                  remove
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="post">
          <div class="votes post__votes">
            <div class="votes__arrow">
              <a href="#">
                <i class="material-icons">keyboard_arrow_up</i>
              </a>
            </div>
            <div class="votes__arrow">
              <a href="#">
                <i class="material-icons">keyboard_arrow_down</i>
              </a>
            </div>
          </div>
          <div class="post__thumb">
            <a href="post.html">
              <img
                src="https://via.placeholder.com/130x70/253341"
                alt="Logo strony"
              />
            </a>
          </div>
          <div class="post__body post-body">
            <p class="post-body__excerpt">
              <a href="post.html">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </a>
            </p>
            <div class="post-body__action-bar action-bar">
              <div class="action-bar__score-comments">
                <a href="post.html">+123</a> |{" "}
                <a href="post.html">32 komentarze</a>
              </div>
              <div class="admin action-bar__modify">
                <a class="button" href="post-edit.html">
                  edit
                </a>
                <a class="button" href="post-remove-question.html">
                  remove
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="post">
          <div class="votes post__votes">
            <div class="votes__arrow">
              <a href="#">
                <i class="material-icons">keyboard_arrow_up</i>
              </a>
            </div>
            <div class="votes__arrow">
              <a href="#">
                <i class="material-icons">keyboard_arrow_down</i>
              </a>
            </div>
          </div>
          <div class="post__thumb">
            <a href="post.html">
              <img
                src="https://via.placeholder.com/130x70/253341"
                alt="Logo strony"
              />
            </a>
          </div>
          <div class="post__body post-body">
            <p class="post-body__excerpt">
              <a href="post.html">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </a>
            </p>
            <div class="post-body__action-bar action-bar">
              <div class="action-bar__score-comments">
                <a href="post.html">+123</a> |{" "}
                <a href="post.html">32 komentarze</a>
              </div>
              <div class="admin action-bar__modify">
                <a class="button" href="post-edit.html">
                  edit
                </a>
                <a class="button" href="post-remove-question.html">
                  remove
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="post">
          <div class="votes post__votes">
            <div class="votes__arrow">
              <a href="#">
                <i class="material-icons">keyboard_arrow_up</i>
              </a>
            </div>
            <div class="votes__arrow">
              <a href="#">
                <i class="material-icons">keyboard_arrow_down</i>
              </a>
            </div>
          </div>
          <div class="post__thumb">
            <a href="post.html">
              <img
                src="https://via.placeholder.com/130x70/253341"
                alt="Logo strony"
              />
            </a>
          </div>
          <div class="post__body post-body">
            <p class="post-body__excerpt">
              <a href="post.html">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </a>
            </p>
            <div class="post-body__action-bar action-bar">
              <div class="action-bar__score-comments">
                <a href="post.html">+123</a> |{" "}
                <a href="post.html">32 komentarze</a>
              </div>
              <div class="admin action-bar__modify">
                <a class="button" href="post-edit.html">
                  edit
                </a>
                <a class="button" href="post-remove-question.html">
                  remove
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="post">
          <div class="votes post__votes">
            <div class="votes__arrow">
              <a href="#">
                <i class="material-icons">keyboard_arrow_up</i>
              </a>
            </div>
            <div class="votes__arrow">
              <a href="#">
                <i class="material-icons">keyboard_arrow_down</i>
              </a>
            </div>
          </div>
          <div class="post__thumb">
            <a href="post.html">
              <img
                src="https://via.placeholder.com/130x70/253341"
                alt="Logo strony"
              />
            </a>
          </div>
          <div class="post__body post-body">
            <p class="post-body__excerpt">
              <a href="post.html">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </a>
            </p>
            <div class="post-body__action-bar action-bar">
              <div class="action-bar__score-comments">
                <a href="post.html">+123</a> |{" "}
                <a href="post.html">32 komentarze</a>
              </div>
              <div class="admin action-bar__modify">
                <a class="button" href="post-edit.html">
                  edit
                </a>
                <a class="button" href="post-remove-question.html">
                  remove
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="post">
          <div class="votes post__votes">
            <div class="votes__arrow">
              <a href="#">
                <i class="material-icons">keyboard_arrow_up</i>
              </a>
            </div>
            <div class="votes__arrow">
              <a href="#">
                <i class="material-icons">keyboard_arrow_down</i>
              </a>
            </div>
          </div>
          <div class="post__thumb">
            <a href="post.html">
              <img
                src="https://via.placeholder.com/130x70/253341"
                alt="Logo strony"
              />
            </a>
          </div>
          <div class="post__body post-body">
            <p class="post-body__excerpt">
              <a href="post.html">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </a>
            </p>
            <div class="post-body__action-bar action-bar">
              <div class="action-bar__score-comments">
                <a href="post.html">+123</a> |{" "}
                <a href="post.html">32 komentarze</a>
              </div>
              <div class="admin action-bar__modify">
                <a class="button" href="post-edit.html">
                  edit
                </a>
                <a class="button" href="post-remove-question.html">
                  remove
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="post">
          <div class="votes post__votes">
            <div class="votes__arrow">
              <a href="#">
                <i class="material-icons">keyboard_arrow_up</i>
              </a>
            </div>
            <div class="votes__arrow">
              <a href="#">
                <i class="material-icons">keyboard_arrow_down</i>
              </a>
            </div>
          </div>
          <div class="post__thumb">
            <a href="post.html">
              <img
                src="https://via.placeholder.com/130x70/253341"
                alt="Logo strony"
              />
            </a>
          </div>
          <div class="post__body post-body">
            <p class="post-body__excerpt">
              <a href="post.html">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </a>
            </p>
            <div class="post-body__action-bar action-bar">
              <div class="action-bar__score-comments">
                <a href="post.html">+123</a> |{" "}
                <a href="post.html">32 komentarze</a>
              </div>
              <div class="admin action-bar__modify">
                <a class="button" href="post-edit.html">
                  edit
                </a>
                <a class="button" href="post-remove-question.html">
                  remove
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="pagination">
          <div class="page-num page-num--active">
            <div>1</div>
          </div>
          <div class="page-num">
            <a href="#" class="page-num__link">
              2
            </a>
          </div>
          <div class="page-num">
            <a href="#" class="page-num__link">
              3
            </a>
          </div>
          <div class="page-num">
            <a href="#" class="page-num__link">
              4
            </a>
          </div>
          <div class="page-num">
            <a href="#" class="page-num__link">
              5
            </a>
          </div>
          <div class="page-num">
            <a href="#" class="page-num__link">
              6
            </a>
          </div>
          <div class="page-num page-num--elipsis">
            <div>...</div>
          </div>
          <div class="page-num page-num--last">
            <a href="#" class="page-num__link">
              12
            </a>
          </div>
          <div class="page-num page-num--next">
            <a href="#" class="page-num__link" title="następna strona">
              🡢
            </a>
          </div>
        </div>
      </section>

      <footer class="section-container section-container--footer">
        <section class="footer-section">
          <h2 class="footer-section__title">Policy</h2>
          <p>
            orem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </section>
        <section class="footer-section">
          <h2 class="footer-section__title">Copyright</h2>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </section>
      </footer>
    </div>
  );
};
