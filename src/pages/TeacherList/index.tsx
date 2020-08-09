import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem'

import './styles.css'

function TeacherList () {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader  title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem
          name="Bruno Flegler Dal Col"
          subject="Matemática"
          photo="https://avatars2.githubusercontent.com/u/18169587?s=460&u=74829c68351b983aeae1abf6c4e8e945905cde9d&v=4"
          description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release."
          value="50,00"
        />
      </main>
    </div>
  )
}

export default TeacherList;
