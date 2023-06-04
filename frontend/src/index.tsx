import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Root } from 'src/Root'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { ErrorPage } from 'src/routes/App/ErrorPage'
import { Townhall } from 'src/routes/Townhall/Townhall'
import { OpenedTasks } from 'src/routes/Townhall/OpenedTasks'
import { Proposal } from 'src/routes/Townhall/Proposal'
import { Workspace } from 'src/routes/Workspace/Workspace'
import { MyTasks } from 'src/routes/Workspace/MyTasks'
import { Assigned } from 'src/routes/Workspace/Assigned'
import { Result } from 'src/routes/Workspace/Result'
import { ToReview } from 'src/routes/Workspace/ToReview'
import { MyProposal } from 'src/routes/Workspace/MyProposal'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <App />,
            },
            {
                path: '/townhall',
                element: <Townhall />,
                children: [
                    {
                        index: true,
                        element: <Navigate to={'/townhall/opened-tasks'} />,
                    },
                    {
                        path: 'opened-tasks',
                        element: <OpenedTasks />,
                    },
                    {
                        path: 'proposal',
                        element: <Proposal />,
                    },
                ],
            },
            {
                path: '/workspace',
                element: <Workspace />,
                children: [
                    {
                        index: true,
                        element: <Navigate to={'/workspace/my-tasks'} />,
                    },
                    {
                        path: 'my-tasks',
                        element: <MyTasks />,
                        children: [
                            {
                                index: true,
                                element: (
                                    <Navigate
                                        to={'/workspace/my-tasks/assigned'}
                                    />
                                ),
                            },
                            {
                                path: 'assigned',
                                element: <Assigned />,
                            },
                            {
                                path: 'result',
                                element: <Result />,
                            },
                            {
                                path: 'to-review',
                                element: <ToReview />,
                            },
                        ],
                    },
                    {
                        path: 'my-proposal',
                        element: <MyProposal />,
                    },
                ],
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
        <RouterProvider router={router} />
    </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
