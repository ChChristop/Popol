import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { MainMenu, AboutMenu } from './menus';
import './stylesheets/pages.scss';
import Wysiwyg from './Wysiwyg';

function PageTemplate({ children }) {
  return (
    <div className='page'>
      <MainMenu />
      {children}
    </div>
  );
}

export function Home() {
  const [message, setMessage] = useState('포트폴리오 사이트');
  // useEffect(() => {
  //   fetch('/api/news')
  //     .then((response) => response.text())
  //     .then((message) => {
  //       setMessage(message);
  //     });
  // }, []);

  return (
    <div className='home'>
      <h1>{message}</h1>
      <h3></h3>
      <nav>
        <Link to='/events'>[주제]</Link>
        <Link to='/products'>[일정]</Link>
        <Link to='/about'>[소개]</Link>
        <Link to='/contact'>[사이트]</Link>
      </nav>
      <Wysiwyg />
    </div>
  );
}

export function About({ children }) {
  return (
    <PageTemplate>
      <section className='about'>
        <AboutMenu />
        <Routes>
          <Route exact path='/' element={<Company />}></Route>
          <Route path='history' element={<History />}></Route>
          <Route path='services' element={<Services />}></Route>
          <Route path='location' element={<Location />}></Route>
        </Routes>
      </section>
    </PageTemplate>
  );
}

export function Events() {
  return (
    <PageTemplate>
      <section className='events'>
        <h1>[Events]</h1>
      </section>
    </PageTemplate>
  );
}

export function Products() {
  return (
    <PageTemplate>
      <section className='products'>
        <h1>[Products]</h1>
      </section>
    </PageTemplate>
  );
}

export function Contact() {
  return (
    <PageTemplate>
      <section className='contact'>
        <h1>
          <a href='https://github.com/ChChristop/finalPjt'>
            'github.com/ChChristop/finalPjt'로 이동
          </a>
        </h1>
      </section>
    </PageTemplate>
  );
}

export const Services = () => (
  <section className='services'>
    <h2>우리의 서비스</h2>
    <p>
      고객은 매우 중요합니다. 고객은 고객을 따릅니다. 미움이 아닌 전체.
      무료입니다. 그러나 자전거 직경 이전의 경주.
    </p>
    <p>
      그러나 아무도 그 요소에 자금을 지원하지 않을 것입니다. 두 개의 화살 그
      자체. 재미있다. 두려워하지 말고 항상 메시지를 가지고 다니십시오. 질량 질량
      Lacinia는 활이 필요하지 않습니다. 이 수업은 Hymenaean 프로젝트를 통해
      결혼을 통해 해안으로 향하는 조용한 파트너에게 적합합니다. 무료로 그룹
      구성원과 채팅하십시오.
    </p>
    <p>
      {' '}
      그러나 지금은 위엄이 있습니다. 수다쟁이 어린이 수준 아이네아스보다 고통에
      초콜릿 샐러드에. 마에세나스 마티스 그러나 계곡은 슬펐다. 예를 들어, 소규모
      항공사 또는 항공사. 병의 침대는 총에 맞든 누가 받아들이든 미소이지만
      슬픔의 덩어리는 아닙니다. 누가 호수에 가는지 부끄럽고 부끄럽습니다. 모리스
      그 자체. 두려움, ullamcorper 또는 tincidunt에 대한 두려움이 없지만 euismod
      in, nibh. 누구나 좋은 이야기를 원합니다. 이 수업은 Hymenaean 프로젝트를
      통해 결혼을 통해 해안으로 향하는 조용한 파트너에게 적합합니다.
    </p>
  </section>
);

export const Location = () => (
  <section className='location'>
    <h2>이메일</h2>
    <p>djflsi101@gmail.com</p>
  </section>
);

export const Company = () => (
  <section className='company'>
    <h2>프로젝트에 대하여</h2>
    <p>풀스택 웹사이트 + 모바일 앱 개발</p>
    <p>프론트 - React</p>
    <p>백앤드 - Spring boot</p>
    <p>모바일 - React Native</p>
    <p>
      - React - 메타에서 개발한 오픈 소스 자바스크립트 라이브러리. 프론트엔드
      개발자 사이에서 AngularJS, Vue.js와 더불어 많은 인기를 얻고 있다. GitHub
      Star 수는 Vue가 가장 많으며(2022년 1월 18일 기준 Vue는 192K, React는 181K,
      Angular는 59K), npm 패키지 다운로드 수는 React가 가장 많다.
    </p>
  </section>
);

export const History = () => (
  <section className='history'>
    <h2>우리의 역사</h2>
    <p>
      고객은 매우 중요합니다. 고객은 고객을 따릅니다. 미움이 아닌 전체.
      무료입니다. 그러나 자전거 직경 이전의 경주.
    </p>
    <p>
      그러나 아무도 그 요소에 자금을 지원하지 않을 것입니다. 두 개의 화살 그
      자체. 재미있다. 두려워하지 말고 항상 메시지를 가지고 다니십시오. 질량 질량
      Lacinia는 활이 필요하지 않습니다. 이 수업은 Hymenaean 프로젝트를 통해
      결혼을 통해 해안으로 향하는 조용한 파트너에게 적합합니다. 무료로 그룹
      구성원과 채팅하십시오.
    </p>
    <p>
      {' '}
      그러나 지금은 위엄이 있습니다. 수다쟁이 어린이 수준 아이네아스보다 고통에
      초콜릿 샐러드에. 마에세나스 마티스 그러나 계곡은 슬펐다. 예를 들어, 소규모
      항공사 또는 항공사. 병의 침대는 총에 맞든 누가 받아들이든 미소이지만
      슬픔의 덩어리는 아닙니다. 누가 호수에 가는지 부끄럽고 부끄럽습니다. 모리스
      그 자체. 두려움, ullamcorper 또는 tincidunt에 대한 두려움이 없지만 euismod
      in, nibh. 누구나 좋은 이야기를 원합니다. 이 수업은 Hymenaean 프로젝트를
      통해 결혼을 통해 해안으로 향하는 조용한 파트너에게 적합합니다.
    </p>
  </section>
);
