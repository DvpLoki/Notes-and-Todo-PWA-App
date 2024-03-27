import {
  Content,
  RootLayout,
  Sidebar,
  ActionButtonRow,
  NotePreviewList,
  MarkdownEditor,
  Header,
} from "./Components";
import NoteTitle from "./Components/NoteTitle";

export default function App() {
  return (
    <>
      <Header />
      <RootLayout>
        <Sidebar className="p-2 bg-zinc-700/50">
          <ActionButtonRow className=" mt-2 flex justify-between mr-1" />
          <NotePreviewList className="mt-3 space-y-1" />
        </Sidebar>

        <Content className="sm:border-l hidden sm:block bg-zinc-900/50 sm:border-l-white/20">
          <NoteTitle className="pt-2" setEditor={() => {}} />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  );
}
