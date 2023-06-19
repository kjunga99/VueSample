import { createWebHistory, createRouter } from 'vue-router'

import ErrorPage from "@/components/ErrorPage"
import Home from '@/components/Home'
import About from '@/components/About'
import Names from '@/components/Names'
import User from '@/components/User'
import User2 from '@/components/User2'

// const router = createRouter({
//     history: createWebHistory(),
//     routes : [  // path별 component를 추가한다.
//         { path: "/", name: "home", component: Home},
//         {
//             path: "/:pathMatch(.*)",
//             name: "not-found",
//             component: ErrorPage
//         },
//     ]
// });

const routes = [
    {
        path: "/", name: "home", component: Home 
    },
    {   
        path: "/about",    // route를 찾을 수 있는 url path 의미
        name: "About",     // route로 연결할 때 사용하는 이름 (선택사항)
        component: About,  // route에서 불러와질 컴포넌트를 의미
    },
    {   
        path: "/names",
        name: "Names",
        component: Names,
    },
    {   
        path: "/user/:name",
        name: "User",
        component: User,
    },
    {   
        path: "/user2/:name",  // user 다음에 오는 url을 name이라는 파라미터로 받아서 사용하겠다는 의미. ex> /name/test라는 url이 넘어오면 name에는 test가 삽입되어 파라미터로 사용 가능
        name: "User2",
        component: User,
        props: true            // path부분의 :name을 props로 전달해주는 옵션 (선택사항)
    },
    {
        path: "/:catchAll(.*)",  // 위에서 선언한 path를 제외한 나머지 path를 전부 ErrorPage component로 보내주도록 하는 역할
        name: "ErrorPage",
        component: ErrorPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes : routes
});

export default router;