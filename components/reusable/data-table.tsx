import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TopStreamedSongInterface } from "@/utils/types";
import { MoreHorizontal, Play } from "lucide-react";
import Image from "next/image";
export default function DataTable({
  data,
}: {
  data: TopStreamedSongInterface;
}) {
  const { top_streamed_songs: topStreamedSongs, last_updated: lastUpdated } =
    data;
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-white/10">
          <TableHead className="">#</TableHead>
          <TableHead>Song</TableHead>
          <TableHead className="hidden md:table-cell">Album</TableHead>
          <TableHead className="text-right">Streams</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topStreamedSongs.map((song) => (
          <TableRow
            key={song.song_id}
            className="group hover:bg-white/10 cursor-pointer"
          >
            <TableCell className="h-10 w-10">
              <div className="relative h-10 w-10 flex-none">
                <Image
                  src={song.cover_image_url || "/2.png"}
                  alt={song.album}
                  className="object-cover rounded-sm"
                  fill
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <Play className="h-5 w-5 text-white" />
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="font-medium leading-none text-white text-sm">
                  {song.title}
                </span>
                <span className="text-xs hover:underline text-white">
                  {song.artists.join(", ")}
                </span>
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell text-white">
              {song.album}
            </TableCell>
            <TableCell className="text-right text-white">
              {song.streams}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 group-hover:text-white hover:bg-white/10 hover:outline-none hover:border-none"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="cursor-pointer">
                    Add to playlist
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    Share
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    View artist
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    View album
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

// <table className="w-full text-sm text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden">
//   <tbody>
//     {topStreamedSongs.map(
//       (
//         {
//           rank,
//           song_id,
//           title,
//           artists,
//           album,
//           streams,
//           duration,
//           release_date,
//           genre,
//           cover_image_url,
//           artist_handle,
//         },
//         index
//       ) => (
//         <tr
//           key={index}
//           className={`transition-all hover:bg-gray-100 dark:hover:bg-gray-700`}
//         >
//           <td className="p-4 border-b border-gray-200 dark:border-gray-700 w-32 h-32">
//             <Image
//               src={cover_image_url}
//               alt="cover_image_url"
//               width={80}
//               height={80}
//             />
//           </td>
//           <td className="p-4 border-b border-gray-200 dark:border-gray-700 border">
//             <h4 className="text-lg font-bold">{title}</h4>
//             {artists.map((artist, i) => (
//               <span key={i} className="text-xs hover:underline">
//                 {artist} {i < artists.length - 1 && ", "}
//               </span>
//             ))}
//           </td>
//           <td className="p-4 border-b border-gray-200 dark:border-gray-700">
//             <span className="">{streams}</span>{" "}
//             <ChartNoAxesCombined className="w-5 h-5 text-green-400 inline-block" />
//           </td>
//           <td className="p-4 border-b border-gray-200 dark:border-gray-700">
//             {duration}
//           </td>
//           <td className="p-4 border-b border-gray-200 dark:border-gray-700">
//             {release_date}
//           </td>
//           <td className="p-4 border-b border-gray-200 dark:border-gray-700">
//             {genre}
//           </td>
//         </tr>
//       )
//     )}
//   </tbody>
// </table>
