import {useState} from 'react';
// import {Input,Button} from 'antd';
import './App.css';
// const {Search}=Input;
function App() {
  let list1=[];
  // 显示隐藏
  const [Show,setShow]=useState(
    {
      display:1,
      show_button:1
    }
  );
  // 任务名称
  const [TitleText,setTitleText]=useState();
  // 添加任务
  const [AddTask,setAddTask]=useState('');
  // 进行任务列表
  const [List,setList]=useState(["鸡锅","鸡锅2"]);
  //完成任务列表
  const [Listed,setListed]=useState(["鸡锅完成1","鸡锅完成2"]);
  // 显示的列表
  const [DisplayList,setDisplayList]=useState([]);

  // 添加任务
  const Increase=()=>{
    list1.push(AddTask);
    list1=[...list1,...List];
    setList(list1);
    console.log(list1);
    setDisplayList(list1);
  }
  //点击删除
  const Delete=(key)=>{
    console.log("已删除！");
    let ListDelete=List;
    ListDelete.splice(key,1);
    list1.push(...List);
    console.log(list1);
    setList(list1);
    setDisplayList(list1);
  }
  //点击已完成
  const Finish=(key)=>{
    // console.log(key);
    console.log("已完成！");
    let ListFinish=List;
    let Finished=ListFinish.splice(key,1);
    list1.push(...Finished,...Listed);
    setListed(list1);
  }

  //点击显示全部任务
  const ShowAll=()=>{
    console.log("显示全部任务！");
    setShow(
      {
        display:1,
        show_button:1
      }
    );
    console.log(Show);
  }
  //点击查看进行中的任务
  const Progressing=(e)=>{
    console.log("查看进行中的任务！");
    setTitleText(e.target.innerText);
    setShow(
      {
        display:0,
        show_button:1
      }
    );
    setDisplayList(List);
  }

  //点击查看已完成的任务
  const Completed=(e)=>{
    console.log("查看已完成的任务！");
    setTitleText(e.target.innerText);
    setShow(
      {
        display:0,
        show_button:0
      }
    );
    setDisplayList(Listed);
  }

  return (

    <div className="App">
      <input
        placeholder="输入添加的任务"
        onInput={(e)=>setAddTask(e.target.value)}
      ></input>
      <button
        onClick={Increase}
      >添加任务</button>
      {
        Show.display===1?
        <div>
            <div style={{border:'1px solid #ccc',margin:'10px'}}>
            <h3>进行中的任务</h3>
          <ul className="list_style">
            {
              List.map((value,key)=>{
                return (
                  <li key={key}>
                    <p>{value}</p>
                    <button onClick={Finish.bind(this, key)}>已完成</button>
                    <button onClick={Delete.bind(this, key)}>删除任务</button>
                  </li>
                )
              })
            }
          </ul>
          </div>
          <div style={{border:'1px solid #ccc',margin:'10px'}}>
            <h3>已完成的任务</h3>
          <ul className="list_style list_style1">
          {
              Listed.map((value,key)=>{
                return (
                  <li key={key}>
                    <p>{value}</p>
                  </li>
                )
              })
            }
          </ul>
          </div>
        </div>
        :
        <div>
           <div>
            <div style={{border:'1px solid #ccc',margin:'10px'}}>
            <h3>{TitleText}</h3>
          <ul className='list_style list_style2'>
            {
              DisplayList.map((value,key)=>{
                return (
                  <li key={key}>
                    <p>{value}</p>
                    {Show.show_button===1?<button onClick={Finish.bind(this, key)}>已完成</button>:''}
                    {Show.show_button===1?<button onClick={Delete.bind(this, key)}>删除任务</button>:''}
                  </li>
                )
              })
            }
          </ul>
          </div>
        </div>
        </div>
      }
      <div>
        <h3>查看任务</h3>
        <button onClick={ShowAll} style={{margin:"10px"}}>显示全部任务</button>
        <button onClick={Progressing} style={{margin:"10px"}}>进行中的任务</button>
        <button onClick={Completed} style={{margin:"10px"}}>已完成的任务</button>
      </div>
    </div>
  );
}

export default App;
