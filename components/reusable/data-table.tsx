"use client";

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
import { formatNumber } from "@/utils/helper";
import { TopStreamedSongInterface } from "@/utils/types";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  MoreHorizontal,
  Play,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";

export default function DataTable({
  data,
}: {
  data: TopStreamedSongInterface;
}) {
  const [topStreamedSongs, setTopStreamedSongs] = useState(
    data.top_streamed_songs,
  );
  const [currentSongs, setCurrentSongs] = useState(
    topStreamedSongs.slice(0, 5),
  );
  const [sortedBy, setSortedBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredBy, setFilteredBy] = useState("");
  const songsPerPage = 5;
  const totalPages = Math.ceil(topStreamedSongs.length / songsPerPage);

  useEffect(() => {
    setCurrentSongs(
      topStreamedSongs.slice(
        currentPage * songsPerPage,
        (currentPage + 1) * songsPerPage,
      ),
    );
  }, [topStreamedSongs, currentPage]);

  const handleSort = (sortBy: string) => {
    const sortedSongs = [...topStreamedSongs];

    if (sortedBy === sortBy) {
      sortedSongs.reverse();
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      sortedSongs.sort((a, b) => {
        if (sortBy === "title") {
          return a.title.localeCompare(b.title);
        } else if (sortBy === "album") {
          return a.album.localeCompare(b.album);
        } else if (sortBy === "streams") {
          return b.streams - a.streams;
        }
        return 0;
      });
      setSortOrder("asc");
    }

    setTopStreamedSongs(sortedSongs);
    setSortedBy(sortBy);
    setCurrentPage(0);
  };

  const filterSongs = (artist: string) => {
    const filteredSongs = data.top_streamed_songs.filter((song) =>
      song.artists.includes(artist),
    );
    setTopStreamedSongs(filteredSongs);
    setFilteredBy(artist);
    setCurrentPage(0);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <div className="space-y-4 mt-4">
      {filteredBy !== "" && (
        <Badge className="bg-blue-400/30 hover:bg-blue-400/10 rounded-full">
          <span className="text-xs">{filteredBy}</span>
          <X
            className="h-4 w-4"
            onClick={() => {
              setFilteredBy("");
              setTopStreamedSongs(data.top_streamed_songs);
              setCurrentPage(0);
            }}
          />
        </Badge>
      )}
      <div className="relative">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-white/10 border-slate-200/10">
              <TableHead>#</TableHead>
              <TableHead
                className="hover:text-white cursor-pointer"
                onClick={() => handleSort("title")}
              >
                Song
                <ChevronDown
                  className={`w-5 h-5 inline-block transition-transform ${
                    sortedBy === "title"
                      ? sortOrder === "asc"
                        ? "rotate-180"
                        : ""
                      : ""
                  }`}
                />
              </TableHead>
              <TableHead
                className="hidden md:table-cell hover:text-white cursor-pointer"
                onClick={() => handleSort("album")}
              >
                Album
                <ChevronDown
                  className={`w-5 h-5 inline-block transition-transform ${
                    sortedBy === "album"
                      ? sortOrder === "asc"
                        ? "rotate-180"
                        : ""
                      : ""
                  }`}
                />
              </TableHead>

              <TableHead
                className="text-right hover:text-white cursor-pointer"
                onClick={() => handleSort("streams")}
              >
                Streams
                <ChevronDown
                  className={`w-5 h-5 inline-block transition-transform ${
                    sortedBy === "streams"
                      ? sortOrder === "asc"
                        ? "rotate-180"
                        : ""
                      : ""
                  }`}
                />
              </TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentSongs.map(
              ({
                song_id,
                title,
                artists,
                album,
                streams,
                cover_image_url,
              }) => (
                <TableRow
                  key={song_id}
                  className="group hover:bg-white/10 cursor-pointer border-slate-200/10"
                >
                  <TableCell className="h-10 w-10">
                    <div className="relative h-10 w-10 flex-none">
                      <Image
                        src={cover_image_url || "/2.png"}
                        alt={album}
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
                        {title}
                      </span>
                      <div>
                        {artists.map((artist, i) => (
                          <span
                            key={artist}
                            onClick={() => filterSongs(artist)}
                            className="text-xs hover:underline text-white"
                          >
                            {artist} {i < artists.length - 1 && ", "}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-white">
                    {album.length > 20 ? album.slice(0, 20) + "..." : album}
                  </TableCell>
                  <TableCell className="text-right text-white">
                    {formatNumber(streams)}
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
              ),
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-end gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevious}
          disabled={currentPage === 0}
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
        >
          <ArrowRight className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </Button>
      </div>
    </div>
  );
}
